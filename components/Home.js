import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default class Home extends React.Component {
  state = {
    usuarios: [],
    usuariosTemp: []
  };

  GoToDetails(curItem) {
    
    this.props.navigation.navigate('Details', {
      item: curItem
    })
  }

  saveText(text) {
    if(text == ''){
      this.setState({usuariosTemp: this.state.usuarios});
    }else{
    this.setState({usuariosTemp: this.state.usuariosTemp.filter(p => p.name.toUpperCase().startsWith(text.toUpperCase()))});
  }
}


  render() {
   
  
    return (
      <View styles={styles.container}>
        <Text styles={styles.header}>Buscar</Text>
        <TextInput style={styles.SearchTextInput}
          onChangeText={text => this.saveText(text)}
        />
        <FlatList
          style={{ marginTop: 40 }}
          data={this.state.usuariosTemp}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: 'white', color: 'black', padding: 30, height: 100, width: Dimensions.get('window').width / 2.0, borderColor: '#e8e8e8', borderWidth: 1 }}>
              <Text>
                {item.name}
              </Text>              
              <Button style={styles.controlButton}
                title="+ Info"
                onPress={() => this.GoToDetails(item)}
              />              
            </View>
          )
          }
          numColumns={2}
        />
      </View>
    );
  };



  componentDidMount(text) {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ usuarios: data })
        this.setState({ usuariosTemp: data })
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

  },
  controlButton:{
    position: 'absolute',
    alignSelf: 'flex-end',
    width: '2',
    color: 'black',
    backgroundColor: '#ccfbcc'
  }
});
