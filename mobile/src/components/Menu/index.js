import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Home from '../../pages/Home';
import Notification from '../../pages/Notification';
import Chat from '../../pages/Chat';
import Profile from '../../pages/Profile';

const icons = {
  Home: {
    lib: MaterialIcons,
    name: 'home'
  },

  Notification: {
    lib: MaterialIcons,
    name: 'notifications-active'
  },

  Chat: {
    lib: MaterialIcons,
    name: 'chat-bubble'
  },

  Profile: {
    lib: FontAwesome,
    name: 'user'
  },
};


export default function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];

          return <Icon name={name} size={size} color={color} />
        }
      })}

      tabBarOptions={{
        inactiveTintColor: '#E0E0E0',
        activeTintColor: '#FAC900',
      }}
      initialRouteName='Home'
    >
      <Tab.Screen 
        name='Home'
        component={Home}
      />

      <Tab.Screen 
        name='Notification'
        component={Notification}
      />

      <Tab.Screen 
        name='Chat'
        component={Chat}
      />

      <Tab.Screen 
        name='Profile'
        component={Profile}
      />
    </Tab.Navigator>
  );
}
