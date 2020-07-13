import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default class Home extends React.Component {
  state = {
    usuarios: [],
  };
  render() {
    return (
      <View styles={styles.container}>
        <Text styles={styles.header}>EVENTOS</Text>
        <TextInput style={styles.SearchTextInput}
          onChangeText={text => onChangeText(text)}
        />
        <FlatList
          style={{ marginTop: 40 }}
          data={this.state.usuarios}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 1 }}>
              <Text style={{ backgroundColor: 'white', color: 'black', padding: 30, height: 100, width: Dimensions.get('window').width / 2.2 }}
                onPress={() => navigation.navigate('Details')}>
                {item.name}
              </Text>
            </View>
          )
          }
          numColumns={2}
        />
      </View>
    );
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ usuarios: data })
      })
      .catch(console.log)
  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,
  SearchTextInput: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
});
