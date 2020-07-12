import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button, Alert, FlatList,Item, Dimensions } from 'react-native';



  

export default class Create extends React.Component {
    state = {
        itens: [{ name: 'Cesar' }, { name: 'Marcel' }, { name: 'Wagner' }],
      };
    render() {
        return (
            <View styles={styles.container}> 

            </View>
        );
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
  });