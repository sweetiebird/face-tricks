import * as types from './types';


export const name = 'user';

export const initialState = {
  displayName: null,
  email: null,
  isAnonymous: undefined,
  isAuthenticated: undefined,
  isFetching: true,
  photoUrl: null,
  providerData: [],
  uid: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        displayName: action.payload.displayName,
        email: action.payload.email,
        isAnonymous: action.payload.isAnonymous,
        isAuthenticated: true,
        isFetching: false,
        photoUrl: action.payload.photoURL,
        providerData: action.payload.providerData,
        uid: action.payload.uid,
      };

    case types.LOGIN_FAILURE:
      return {
        ...initialState,
        isAuthenticated: false,
        isFetching: false,
      };

    default:
      return state;
  }
};
