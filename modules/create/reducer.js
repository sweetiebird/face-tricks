import * as types from './types';


export const name = 'create';

export const initialState = {
  isFetching: false,
  resultId: null,
  result: [],
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.IMAGE_RESULT_ID:
      return {
        ...state,
        resultId: action.payload.resultId,
      };

    case types.SEND_IMAGE_REQUEST:
      return {
        ...state,
        isFetching: true,
        result: [],
      };

    case types.SEND_IMAGE_SUCCESS:
      return {
        ...state,
        isFetching: true,
        result: state.result.concat(action.payload.result),
      };

    case types.SEND_IMAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
