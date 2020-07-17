import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            password: "",
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnPress = this.handleOnPress.bind(this);
    }

    handleOnChange(e, val = 1) {

        if (val == 1)
            this.setState({ user: e })
        else
            this.setState({ password: e })
        // else
        // this.setState({ password: e.target.value })
    }

    handleOnPress() {

        if (this.state.user == "professor" && this.state.password == "wooow") {
            this.props.navigation.navigate('Home');
        } else {
            alert('LOGIN INVALIDO! WOOOOOOW');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.loginTextInput}
                    onChangeText={e => this.handleOnChange(e, 1)}
                />

                <TextInput style={styles.loginTextInput}
                    onChangeText={e => this.handleOnChange(e, 2)}
                    secureTextEntry={true}
                    textContentType={'password'}

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
        alignItems: 'center',
        justifyContent: 'center'
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