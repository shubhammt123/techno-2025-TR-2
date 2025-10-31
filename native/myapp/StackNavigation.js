import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contact from './Contact';

const StackNavigation = () => {

    const Stack =createNativeStackNavigator();

    console.log("Stack navigator")

  return (
    <View  style={{flex : 1 }}>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='profile' component={Profile} />
        <Stack.Screen name='contact' component={Contact} />
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})