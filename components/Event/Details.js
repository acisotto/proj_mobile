import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, Dimensions, Image } from 'react-native';





export default class Details extends React.Component {



  state = {
    usuario: [],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header}>{this.state.usuario.name}</Text>
        </View>
        <View style={styles.body}>
          <Image style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }} />
          <View style={styles.context}>
            <Text style={styles.info}>email : {this.state.usuario.email}</Text>
            <Text style={styles.info}>phone : {this.state.usuario.phone}</Text>
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.headerDetails}>Details:</Text>
          <Text style={styles.bodyDetails}>Esses sao os detalhes.</Text>

        </View>
        <View style={styles.fixToText}>
          <Button style={styles.submitButton}
            title="Home"
            onPress={() => navigation.goBack()}

            color={"black"}
          />
        </View>
      </View>
    );
  };

  //carregar um unico
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then((data) => {
        this.setState({ usuario: data })
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
    width: Dimensions.get('window').width / 1.0,
    fontSize: 30,
    backgroundColor: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
  headerDetails: {
    width: Dimensions.get('window').width / 1.0,
    fontSize: 25,
    marginLeft: 20,
    backgroundColor: '#fff',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    height: Dimensions.get('window').height / 4.0,
    width: Dimensions.get('window').width / 2.0,

  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flexDirection: 'row'
  },
  bodyDetails: {
    width: Dimensions.get('window').width / 1.0,
    fontSize: 20,
    backgroundColor: '#fff',
    textAlign: 'left',
    borderColor: 'black',
    borderWidth: 1,
    height: 200

  },
  context: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    fontSize: 20

  }
});