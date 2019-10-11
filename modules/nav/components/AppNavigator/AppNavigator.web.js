import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import { MainTabNavigator } from './components';


const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});
switchNavigator.path = '';


const AppNavigator = createBrowserApp(switchNavigator, { history: 'hash' });


export default AppNavigator;
