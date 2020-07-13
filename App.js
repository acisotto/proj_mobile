import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Home from './components/Home';
import Details from './components/Event/Details';



function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Login/>
      <Button title="Home" onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Home/>
    </View>
  );
}

function DetailsScreen({navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Details/>
    </View>
  );
}

function ListScreen({navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <List/>
    </View>
  );
}

function CreateOrUpdate({navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Create/>
    </View>
  );
}


const stack = createStackNavigator();



export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Details" component={DetailsScreen} />
        <stack.Screen name="List" component={ListScreen} />
        <stack.Screen name="CreateOrUpdate" component={CreateOrUpdate} />
      </stack.Navigator>
      </NavigationContainer>
    );


  }

}