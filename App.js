import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Home from './components/Home';
import Details from './components/Details';




const stack = createStackNavigator();



export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <stack.Navigator>          
          <stack.Screen name="Login" component={Login} />
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="Details"  component={Details} />
         </stack.Navigator>
      </NavigationContainer>
    );


  }

}