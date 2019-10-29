import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { colors, icons } from 'constants';

import { CreateScreen, EditScreen } from 'modules/create/components';
import { HistoryScreen } from 'modules/history/components';
import { HomeScreen } from 'modules/home/components';
import { AccountScreen } from 'modules/user/components';

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
// 'home' tab
// =========

const HomeStack = createStackNavigator(
  { Home: HomeScreen },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon isFocused={focused} name={icons.TRENDING} />
  ),
};

HomeStack.path = 'home';

// =========
// 'user' tab
// =========

const AccountStack = createStackNavigator(
  { Account: AccountScreen },
  config
);

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon isFocused={focused} name={icons.USER} />
  ),
};

AccountStack.path = 'account';

// =========
// base stack
// =========

const tabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Create: CreateStack,
  Account: AccountStack,
}, {
  tabBarOptions: {
    activeTintColor: colors.primaryHover,
    inactiveTintColor: colors.tabIconDefault,
  },
  initialRouteName: 'Create',
});

tabNavigator.path = '';


export default tabNavigator;
