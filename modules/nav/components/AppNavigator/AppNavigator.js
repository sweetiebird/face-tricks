import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { AuthNavigator, MainTabNavigator } from './components';


const AppNavigator = createAppContainer(
  createSwitchNavigator({
    Auth: AuthNavigator,
    Main: MainTabNavigator,
  }, {
    initialRouteName: 'Main',
  })
);


export default AppNavigator;
