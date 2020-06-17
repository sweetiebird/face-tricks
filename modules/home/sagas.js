import { eventChannel, END } from 'redux-saga'
import { all, call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';

import { Socket } from '../../services';

import * as api from './api';
import * as actions from './actions';
import * as parse from './parse';
import * as types from './types';


let socket;

async function socketChannel(id) {
  return () => {
    return eventChannel((emitter) => {
      return () => {
        socket.setOnMessage(undefined);
      };
    });
  };
}

function* watch() {
  socket = yield call(Socket.init);

  while (true) {
    const { payload = {}, type } = yield take([]);

    switch (type) {
      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield all([]);
}
