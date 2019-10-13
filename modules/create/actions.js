import * as types from './types';


export const sendImageRequest = image => ({
  payload: { image },
  type: types.SEND_IMAGE_REQUEST,
});

export const imageResultId = resultId => ({
  payload: { resultId },
  type: types.IMAGE_RESULT_ID,
});

export const sendImageSuccess = result => ({
  payload: { result },
  type: types.SEND_IMAGE_SUCCESS,
});

export const sendImageFailure = (message, error) => ({
  payload: { message, error },
  type: types.SEND_IMAGE_FAILURE,
});

export const imageResultFinish = () => ({
  type: types.IMAGE_RESULT_FINISH,
});

export const imageAdded = uri => ({
  payload: { uri },
  type: types.IMAGE_ADDED,
});
