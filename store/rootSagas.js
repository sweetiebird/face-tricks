import { all } from 'redux-saga/effects';

import { sagas as create } from '../modules/create';
import { sagas as user } from '../modules/user';


export default function* rootSaga() {
  yield all([
    create(),
    user(),
  ]);
}
