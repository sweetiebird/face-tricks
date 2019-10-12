import * as types from './types';


const name = 'user';

const initialState = {
  displayName: null,
  email: null,
  isAnonymous: undefined,
  isAuthenticated: undefined,
  isFetching: true,
  photoUrl: null,
  providerData: [],
  uid: null,
};

const reducer = (state = {}, action) => {
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


export {
  initialState,
  name,
};
export default reducer;
