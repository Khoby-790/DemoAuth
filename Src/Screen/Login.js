
import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import styles from '../Css/styles';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
        }
    }

    _handleEmailEntry = (email) =>{
        this.setState({email});
    }

    _handlePassEntry = (password) =>{
        this.setState({password});
    }

    _handleLoginSubmit = () =>{
        this.props.navigation.navigate('main')
    }
    _handleGoTo = () =>{
        this.props.navigation.navigate('signUp');
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.col}>
                    <Image 
                    style={styles.image}
                    source={require('../Images/logo.png')}/>
                    <Text style={styles.text}>Login</Text>
                </View>
                <KeyboardAvoidingView 
                style={styles.col}
                enabled
                >
                        
                        <TextInput
                        style={styles.inputs}
                        placeholder="Enter Email :"
                        placeholderTextColor="#ffff"
                        onChangeText = {this._handleEmailEntry}
                        />
                        <TextInput
                        style={styles.inputs}
                        placeholder="Enter Password :"
                        placeholderTextColor="#ffff"
                        onChangeText = {this._handleNameEntry}
                        />
                        <TouchableOpacity 
                        onPress={this._handleLoginSubmit}
                        style={styles.btn}>
                            <Text style={styles.btnText}>SUBMIT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={this._handleGoTo}
                        style={styles.link}>
                            <Text style={styles.linkText}>Not a user? Create Account</Text>
                        </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }


}