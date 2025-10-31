import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Profile from './Profile';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'red',
      })}
    >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})