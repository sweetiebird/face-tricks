import * as types from './types';


export const name = 'create';

export const initialState = {
  isFetching: false,
  imageUri: null,
  resultId: null,
  results: [],
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.IMAGE_ADDED:
      return {
        ...initialState,
        imageUri: action.payload.uri,
      };

    case types.IMAGE_RESULT_ID:
      return {
        ...state,
        resultId: action.payload.resultId,
      };

    case types.SEND_IMAGE_REQUEST:
      return {
        ...state,
        isFetching: true,
        results: [],
      };

    case types.SEND_IMAGE_SUCCESS:
      return {
        ...state,
        isFetching: true,
        results: state.results.concat(action.payload.result),
      };

    case types.SEND_IMAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case types.IMAGE_RESULT_FINISH:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
