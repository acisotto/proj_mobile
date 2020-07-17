import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, Dimensions, Image } from 'react-native';





export default class Details extends React.Component {
  // state = {
  //   item: [],
  // };
  render() {
    
    let item = this.props.route.params.item;    

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header}>{item.name}</Text>
        </View>
        <View style={styles.body}>
          <Image style={styles.image}
            source={require('../assets/person.png')} />
          <View style={styles.context}>
            {/* <Text style={styles.info}>email : {this.state.usuario.email}</Text>
            <Text style={styles.info}>phone : {this.state.usuario.phone}</Text> */}
            
            <Text style={styles.info}></Text>
            <Text style={styles.info}>phone : {item.phone}</Text>
          
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.headerDetails}>Details:</Text>
          <Text style={styles.bodyDetails}>
          Company: {item.company.name} {"\n"} 
          email : {item.email}{"\n"}
          Website: {item.website}{"\n"}
          Address: {item.address.street}, {item.address.suite} ({item.address.city}){"\n"}
          </Text>

        </View>
        <View style={styles.fixToText}>
          <Button style={styles.submitButton}
            title="Home"
            onPress={() => this.props.navigation.goBack()}

            color={"black"}
          />
        </View>
      </View>
    );
  };






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