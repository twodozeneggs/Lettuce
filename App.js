import React, { useState, Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quizwrapper from './components/Quizwrapper';
import Results from './components/Results';
import { StackActions } from '@react-navigation/native';


const Stack = createNativeStackNavigator();


export default class App extends React.Component {
  

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          name="Soup"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Quizwrapper"
            component={Quizwrapper}
          />

          <Stack.Screen
          name='Results'
          component={Results}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}