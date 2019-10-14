import { eventChannel, END } from 'redux-saga'
import { all, call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';

import { Socket } from 'services';

import * as api from './api';
import * as actions from './actions';
import * as parse from './parse';
import * as types from './types';


let socket;

async function socketChannel(id) {
  let count = 0;

  return () => {
    return eventChannel((emitter) => {
      const handleResult = async (e) => {
        const buffer = e.data;
        const uri = await parse.image(buffer);

        emitter({ resultUri: uri });

        count += 1;

        if (count >= 11) {
          count = 0;
          emitter({ finished: true });
          emitter(END);
        }
      };

      socket.setOnMessage(handleResult);

      const message = `
      (ado


        (mac w/size (w h rest: body)
          \`(let img (do ,@body)
              (if (image? img)
                  (resize-image img '(,w ,h))
                img)))

        (def set-image-from-data (data)
          (with-temp-dir tmp-image-dir
            (let fname (os.path.join tmp-image-dir "image.jpg")
              (with (open fname "wb") as f
                (f.write data))
              (let img (PIL.Image.open fname)
                (set-raw-image img)))))

        ;(await (set-data ${id}))
        ;(grab-target)
        (set-image-from-data ${id})
        (set-latent (grab-estimate))
        ;(set-latent (optimize-latent 4))
        (set emily (grab-image))
        (await (send-image (w/size 512 512 emily)))
        (for i 10
          (set-latent (optimize-latent 4))
          (await (send-image (w/size 512 512 (set emily (grab-image))))))
        (w/size 512 512
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
    console.log(payload);
    if (payload.resultUri) {
      yield put(actions.sendImageSuccess(payload.resultUri));
    } else if (payload.finished) {
      yield put(actions.imageResultFinish());
    }
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

function* watchEvents(action) {
  const makeChannel = yield call(socketChannel, action.payload.resultId);

  const chan = yield call(makeChannel);

  yield takeEvery(chan, imageSuccess);
}

function* watchForResultId() {
  yield takeLatest(types.IMAGE_RESULT_ID, watchEvents);
}

function* sendEditorValues(values) {
  try {
    const mappedValues = Object.keys(values).reduce((obj, key) => {
      const mappedVal = (0.5 - values[key]) * -2;
      return {
        ...obj,
        [key]: mappedVal,
      };
    }, {});
    const buffer = yield call(api.sendEditorValues, socket, mappedValues);
    const uri = yield call(parse.image, buffer);
    yield put(actions.sendEditorValuesSuccess(uri));
  } catch (err) {
    yield put(actions.sendEditorValuesFailure(err.message, err));
  }
}

function* watch() {
  socket = yield call(Socket.init);

  while (true) {
    const { payload = {}, type } = yield take([
      types.SEND_EDITOR_VALUES_REQUEST,
      types.SEND_IMAGE_REQUEST,
    ]);

    switch (type) {
      case types.SEND_EDITOR_VALUES_REQUEST:
        yield fork(sendEditorValues, payload.values);
        break;

      case types.SEND_IMAGE_REQUEST:
        yield fork(sendImage, payload.image);
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield all([watch(), watchForResultId()]);
}
