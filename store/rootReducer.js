import { combineReducers } from 'redux';

import { reducer as user } from 'modules/user';


const appReducer = combineReducers({
  [user.name]: user.reducer,
});


export default appReducer;
