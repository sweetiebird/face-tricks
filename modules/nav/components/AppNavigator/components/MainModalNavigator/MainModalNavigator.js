import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { EditScreen } from 'modules/create/components';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    mode: 'modal',
    headerMode: 'none',
  },
});

// =========
// 'edit' modal stack
// =========

const EditStack = createStackNavigator(
  {
    Edit: EditScreen,
  },
  config,
);

EditStack.navigationOptions = {};

EditStack.path = '';

export default EditStack;
