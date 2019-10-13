import { call, fork, put, take } from 'redux-saga/effects';

import * as api from './api';
import * as actions from './actions';
import * as parse from './parse';
import * as types from './types';


function* sendImage(image) {
  try {
    const result = yield call(api.sendImage, image);
    const uri = yield call(parse.image, result);
    yield put(actions.sendImageSuccess({ result: uri }));
  } catch (err) {
    yield put(actions.sendImageFailure(err.message, err));
  }
}

function* watch() {
  while (true) {
    const { payload = {}, type } = yield take([
      types.SEND_IMAGE_REQUEST,
    ]);

    switch (type) {
      case types.SEND_IMAGE_REQUEST:
        yield fork(sendImage, payload.image);
        break;

      default:
        yield null;
    }
  }
}


export default function* rootSaga() {
  yield watch();
}
