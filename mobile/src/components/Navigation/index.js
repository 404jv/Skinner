import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../Menu';
import Notification from '../../pages/Notification'

const AppStack = createStackNavigator();

export default function Navigation() {
  return (
    <AppStack.Navigator
      headerMode="none"
    >
      <AppStack.Screen name="Menu" component={Menu} />
    </AppStack.Navigator>
  );
}
