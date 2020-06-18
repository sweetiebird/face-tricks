import * as types from './types';


export const loginSuccess = payload => ({
  payload,
  type: types.LOGIN_SUCCESS,
});

export const loginFailure = (message, error) => ({
  payload: { message, error },
  type: types.LOGIN_FAILURE,
});
