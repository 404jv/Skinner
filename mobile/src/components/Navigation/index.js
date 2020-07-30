import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../Menu';
import Chats from '../../pages/Chats'

const AppStack = createStackNavigator();

export default function Navigation() {
  return (
    <AppStack.Navigator
      headerMode="none"
    >
      <AppStack.Screen name="Menu" component={Menu} />
      <AppStack.Screen name="Chats" component={Chats} />
    </AppStack.Navigator>
  );
}
