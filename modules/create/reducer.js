import * as types from './types';


export const name = 'create';

export const initialState = {
  editorValues: {},
  editorIsFetching: false,
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

    case types.ITERATE_AGAIN:
      return {
        ...state,
        isFetching: true,
      };

    case types.SEND_IMAGE_SUCCESS:
      return {
        ...state,
        isFetching: true,
        results: state.results.concat(action.payload.result || []),
      };

    case types.SEND_IMAGE_FAILURE:
      return {
        ...state,
        editorIsFetching: false,
        isFetching: false,
      };

    case types.IMAGE_RESULT_FINISH:
      return {
        ...state,
        editorIsFetching: false,
        isFetching: false,
      };

    case types.SEND_EDITOR_VALUES_REQUEST:
      return {
        ...state,
        editorIsFetching: true,
        editorValues: action.payload.values,
      };

    case types.SEND_EDITOR_VALUES_SUCCESS:
      return {
        ...state,
        editorIsFetching: false,
        // results: state.results.concat(action.payload.result),
      };

    case types.SEND_EDITOR_VALUES_FAILURE:
      return {
        ...state,
        editorIsFetching: false,
      };

    case types.EVAL_REQUEST:
      return {
        ...state,
        ...(action.payload.values ? { values: action.payload.values } : {}),
        editorIsFetching: true,
        isFetching: true,
      };

    // case types.EVAL_SUCCESS:
    //   return {
    //     ...state,
    //     results: state.results.concat(action.payload.result),
    //   };

    case types.EVAL_FAILURE:
      return {
        ...state,
        editorIsFetching: false,
        isFetching: false,
      };

    case types.POP_LAST_RESULT:
      return {
        ...state,
        results: state.results.splice(state.results.length - 1, 1),
      };

    default:
      return state;
  }
};
