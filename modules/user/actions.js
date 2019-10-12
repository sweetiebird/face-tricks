import * as types from './types';


export const loginSuccess = payload => ({
  payload,
  type: types.LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: types.LOGIN_FAILURE,
});
