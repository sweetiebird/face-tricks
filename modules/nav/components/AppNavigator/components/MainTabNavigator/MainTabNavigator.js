import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { colors } from 'constants';

import TabBarIcon from 'components/TabBarIcon';
import { CreateScreen } from 'modules/create/components';
import { HistoryScreen } from 'modules/history/components';
import { UserScreen } from 'modules/user/components';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const CreateStack = createStackNavigator(
  {
    Create: {
      screen: CreateScreen,
    },
  },
  config
);

CreateStack.navigationOptions = {
  tabBarLabel: 'Create',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-color-wand' : 'md-color-wand'}
    />
  ),
};

CreateStack.path = '';

const HistoryStack = createStackNavigator(
  {
    History: {
      screen: HistoryScreen,
    },
  },
  config
);

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'} />
  ),
};

HistoryStack.path = 'history';

const UserStack = createStackNavigator(
  {
    User: {
      screen: UserScreen,
    },
  },
  config
);

UserStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

UserStack.path = 'user';

const tabNavigator = createBottomTabNavigator({
  CreateStack,
  HistoryStack,
  UserStack,
}, {
  tabBarOptions: {
    activeTintColor: colors.primaryHover,
    inactiveTintColor: colors.tabIconDefault,
  },
});

tabNavigator.path = '';

export default tabNavigator;
