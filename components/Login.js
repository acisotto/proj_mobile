import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class Login extends React.Component {

    async handleOnPress() {
        const result = await fetch('https://reqres.in/api/users/2')
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                console.error(error);
            });

        console.log(result);
    }

    render() {
        return (
            <View styles={styles.container}>
                <TextInput style={styles.loginTextInput}
                    onChangeText={text => onChangeText(text)}
                />

                <TextInput style={styles.loginTextInput}
                    onChangeText={text => onChangeText(text)}
                />
                <Button style={styles.loginButton}
                    title="Login" onPress={this.handleOnPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    loginTextInput: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 5,
    },
    loginButton: {
        backgroundColor: '#009688',
    }
});