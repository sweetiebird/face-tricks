import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { colors, icons } from 'constants';

import { CreateScreen, EditScreen } from 'modules/create/components';
import { HistoryScreen } from 'modules/history/components';
import { UserScreen } from 'modules/user/components';

import { TabBarIcon } from 'components';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// =========
// 'create' tab
// =========

const CreateStack = createStackNavigator(
  {
    Create: CreateScreen,
    Edit: EditScreen,
  },
  config,
);

CreateStack.navigationOptions = {
  tabBarLabel: 'Create',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon isFocused={focused} name={icons.CREATE} />
  ),
};

CreateStack.path = '';

// =========
// 'history' tab
// =========

const HistoryStack = createStackNavigator(
  { History: HistoryScreen },
  config
);

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon isFocused={focused} name={icons.HISTORY} />
  ),
};

HistoryStack.path = 'history';

// =========
// 'user' tab
// =========

const UserStack = createStackNavigator(
  { User: UserScreen },
  config
);

UserStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon isFocused={focused} name={icons.USER} />
  ),
};

UserStack.path = 'user';

// =========
// base stack
// =========

const tabNavigator = createBottomTabNavigator({
  CreateStack,
  // HistoryStack,
  // UserStack,
}, {
  tabBarOptions: {
    activeTintColor: colors.primaryHover,
    inactiveTintColor: colors.tabIconDefault,
  },
});

tabNavigator.path = '';


export default tabNavigator;
