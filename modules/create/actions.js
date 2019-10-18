import * as types from './types';


export const sendImageRequest = (image, isReset) => ({
  payload: { image, isReset },
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

export const sendEditorValuesRequest = values => ({
  payload: { values },
  type: types.SEND_EDITOR_VALUES_REQUEST,
});

export const sendEditorValuesSuccess = result => ({
  payload: { result },
  type: types.SEND_EDITOR_VALUES_SUCCESS,
});

export const sendEditorValuesFailure = (message, error) => ({
  payload: { message, error },
  type: types.SEND_EDITOR_VALUES_FAILURE,
});

export const evalRequest = (code, ...props) => ({
  payload: { code, ...props },
  type: types.EVAL_REQUEST,
});

export const evalSuccess = result => ({
  payload: { result },
  type: types.EVAL_SUCCESS,
});

export const evalFailure = (message, error) => ({
  payload: { message, error },
  type: types.EVAL_FAILURE,
});

export const iterateAgain = resultId => ({
  payload: { resultId },
  type: types.ITERATE_AGAIN,
});

export const socketDisconnected = () => ({
  type: types.SOCKET_DISCONNECTED,
});
