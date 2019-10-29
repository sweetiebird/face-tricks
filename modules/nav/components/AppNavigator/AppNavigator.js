import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { AuthNavigator, MainModalNavigator, MainTabNavigator } from './components';


const AppNavigator = createAppContainer(
  createSwitchNavigator({
    Auth: AuthNavigator,
    Main: MainTabNavigator,
    Edit: MainModalNavigator,
  }, {
    initialRouteName: 'Main',
  })
);


export default AppNavigator;
