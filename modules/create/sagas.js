import { eventChannel } from 'redux-saga'
import { all, call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';

import { create } from 'constants';

import { Socket } from 'services';

import * as api from './api';
import * as actions from './actions';
import * as parse from './parse';
import * as types from './types';


let socket;
let max = create.iterationsUpperBound;
let count = 0;

async function socketChannel(id) {
  return () => {
    return eventChannel((emitter) => {
      const handleResult = async (e) => {
        count += 1;

        const buffer = e.data || e;

        if (buffer) {
          const buffer = e.data;
          const uri = await parse.image(buffer, id);
          const payload = { finished: false, resultUri: uri };

          if (count >= max) {
            payload.finished = true;
          }

          emitter(payload);
        }
      };

      socket.setOnMessage(handleResult);
      socket.setOnClose(() => {
        emitter({ disconnected: true });
      });

      const message = `
      (ado

        (mac w/size (w h rest: body)
          \`(do ,@body))

        (def set-image-from-data (data)
          (with-temp-dir tmp-image-dir
            (let fname (os.path.join tmp-image-dir "image.jpg")
              (with (open fname "wb") as f
                (f.write data))
              (let img (PIL.Image.open fname)
                (set-raw-image img)))))

        (async def pause (secs)
          (let n (either secs 0.5)
            (await (asyncio.sleep n))))

        (set-image-from-data ${id})
        (await (send-image (grab-target)))
        (set-latent (grab-estimate))
        (set emily (grab-image))
        (await (send-image (w/size ${create.imageSize} ${create.imageSize} emily)))
        (await (pause))
        (for i ${create.iterations}
          (set-latent (optimize-latent 4))
          (await (send-image (w/size ${create.imageSize} ${create.imageSize} (set emily (grab-image)))))
          (await (pause)))
        (w/size ${create.imageSize} ${create.imageSize}
          emily)
      )`;

      socket.sendMessage(message);

      return () => {
        socket.setOnMessage(undefined);
      };
    });
  };
}

function* imageSuccess(payload) {
  try {
    yield payload.resultUri ? put(actions.sendImageSuccess(payload.resultUri)) : false;
    yield payload.finished ? put(actions.imageResultFinish()) : false;
    yield payload.disconnected ? put(actions.socketDisconnected()) : false;
  } catch (err) {
    yield put(actions.sendImageFailure(err.message, err));
  }
}

function* sendImage(image) {
  try {
    const id = yield call(api.sendImage, socket, image);
    yield put(actions.imageResultId(id));
  } catch (err) {
    yield put(actions.sendImageFailure(err.message, err));
  }
}

function* sendEditorValues(values) {
  try {
    max += 1;
    const mappedValues = Object.keys(values).reduce((obj, key) => {
      const mappedVal = (2 - values[key]) * -1;
      return {
        ...obj,
        [key]: mappedVal,
      };
    }, {});
    yield call(api.sendEditorValues, socket, mappedValues);
  } catch (err) {
    yield put(actions.sendEditorValuesFailure(err.message, err));
  }
}

function* sendEval(code) {
  try {
    max += 1;
    yield call(api.sendEval, socket, code);
  } catch (err) {
    yield put(actions.evalFailure(err.message, err));
  }
}

function* watchEvents(action) {
  const makeChannel = yield call(socketChannel, action.payload.resultId);

  const chan = yield call(makeChannel);

  yield takeEvery(chan, imageSuccess);
}

function* watchForResultId() {
  yield takeLatest([
    types.IMAGE_RESULT_ID,
    types.ITERATE_AGAIN,
  ], watchEvents);
}

function* connectSocket() {
  socket = yield call(Socket.init);
}

function* watchConnection() {
  yield takeLatest(types.SOCKET_DISCONNECTED, connectSocket);
}

function* watch() {
  yield call(connectSocket);

  while (true) {
    const { payload = {}, type } = yield take([
      types.EVAL_REQUEST,
      types.SEND_EDITOR_VALUES_REQUEST,
      types.SEND_IMAGE_REQUEST,
    ]);

    switch (type) {
      case types.EVAL_REQUEST:
        yield fork(sendEval, payload.code);
        break;

      case types.SEND_EDITOR_VALUES_REQUEST:
        yield fork(sendEditorValues, payload.values);
        break;

      case types.SEND_IMAGE_REQUEST:
        yield fork(sendImage, payload.image, payload.isReset);
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield all([watch(), watchForResultId(), watchConnection()]);
}
