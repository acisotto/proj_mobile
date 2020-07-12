
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, Dimensions } from 'react-native';





export default class Details extends React.Component {



  state = {
    usuario,
  };
  render() {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;

    return (
      <View styles={styles.container}>
        <Text styles={styles.header}>EVENTOS</Text>
        <TextInput style={styles.SearchTextInput}
          onChangeText={text => onChangeText(text)}
        />
            <View style={{ marginBottom: 1 }}>
              <Text style={{ backgroundColor: 'white', color: 'black', padding: 30, height: 100, width: Dimensions.get('window').width / 2.2 }}
                 >
                {this.state.usuario.name}
              </Text>
            </View>
          )
          }
          numColumns={2}
        />
        <View style={styles.fixToText}>
          <Button style={styles.submitButton}
            title="Home"
            onPress={() => Alert.alert('Go to home')}

            color={"green"}
          />
        </View>
      </View>
    );
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users/'+ this.id)
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