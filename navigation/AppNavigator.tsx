import * as React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  Auth: AuthNavigator,

  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});
