import * as types from './types';


export const name = 'create';

export const initialState = {
  isFetching: false,
  result: null,
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SEND_IMAGE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case types.SEND_IMAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: action.payload.result,
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
