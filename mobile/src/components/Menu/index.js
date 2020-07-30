import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import HomeButton from '../HomeButton'

import Home from '../../pages/Home';
import Communities from '../../pages/Communities';
import Notifications from '../../pages/Notifications';
import ListChats from '../../pages/ListChats';
import Profile from '../../pages/Profile';

const icons = {
  Communities: {
    lib: MaterialIcons,
    name: 'people'
  },

  Chat: {
    lib: MaterialIcons,
    name: 'chat-bubble'
  },

  Notifications: {
    lib: MaterialIcons,
    name: 'notifications-active'
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
          if (route.name === 'Home') {
            return <HomeButton />
          }

          const { lib: Icon, name } = icons[route.name];

          return <Icon name={name} size={size} color={color} />
        }
      })}

      tabBarOptions={{
        inactiveTintColor: '#E0E0E0',
        activeTintColor: '#444344'
      }}
      initialRouteName='Home'
    >

      <Tab.Screen 
        name='Communities'
        component={Communities}
      />
      
      <Tab.Screen
        name='Notifications'
        component={Notifications}
      />

      <Tab.Screen 
        name='Home'
        component={Home}
        options={{
          title: ''
        }}
      />

      <Tab.Screen 
        name='Chat'
        component={ListChats}
      />

      <Tab.Screen 
        name='Profile'
        component={Profile}
      />
    </Tab.Navigator>
  );
}
