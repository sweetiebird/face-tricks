import * as types from './types';


export const sendImageRequest = image => ({
  payload: { image },
  type: types.SEND_IMAGE_REQUEST,
});

export const sendImageSuccess = payload => ({
  payload,
  type: types.SEND_IMAGE_SUCCESS,
});

export const sendImageFailure = (message, error) => ({
  payload: { message, error },
  type: types.SEND_IMAGE_FAILURE,
});
