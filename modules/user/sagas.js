import { eventChannel } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects';

import { Auth } from 'services';

import * as actions from './actions';
import * as parse from './parse';


function authChannel() {
  return eventChannel((emitter) => {
    const handleAuthChange = (user) => {
      const payload = user ? { user } : {};
      emitter(payload);
    };

    const unsubscribe = Auth.auth.onAuthStateChanged(handleAuthChange);

    return () => {
      unsubscribe()
    };
  });
}

function* watchEvents() {
  const chan = yield call(authChannel);

  try {
    while (true) {
      const payload = yield take(chan);

      if (payload.user) {
        const userData = parse.userData(payload.user);
        yield put(actions.loginSuccess(userData));
      } else {
        yield put(actions.loginFailure('No user', {}));
      }
    }
  } catch (err) {
    yield put(actions.loginFailure(err.message, err));
  }
}


export default function* rootSaga() {
  yield watchEvents();
}
