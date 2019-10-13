import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { LoginScreen } from 'modules/user/components';


// =========
// auth-related navigation
// =========

const AuthStack = createStackNavigator({
  Login: LoginScreen,
}, {
  initialRouteName: 'Login',
});

AuthStack.path = 'auth';


export default AuthStack;
