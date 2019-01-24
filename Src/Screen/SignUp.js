import React from "react";
import { 
    View, 
    TextInput,
    Text,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../Css/styles';
import firebase from '../lib/firebase';


export default class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            password:"",
        }
    }

    _handleNameEntry = (name) =>{
        this.setState({name});
    }

    _handleEmailEntry = (email) =>{
        this.setState({email});
    }

    _handlePasswordEntry = (password) =>{
        this.setState({password});
    }

    _handleSubmitEntry = () =>{
        const {name, email, password} = this.state;
        // alert(name);
        let response = firebase.createUser(name,email,password);
        if(response){
            alert("You have created an account successfully" + JSON.stringify(response));
            this.props.navigation.navigate("login");
        }
    }

    _handleGoTo = () =>{
        this.props.navigation.navigate('login');
    }

    render (){
        return (
            <View style={styles.container}>
                    <View style={styles.col}>
                <Image 
                style={styles.image}
                source={require('../Images/logo.png')}/>
                <Text style={styles.text}>Register</Text>
            </View>
            <KeyboardAvoidingView
            style={styles.col}
                enabled
                >
                <TextInput
                style={styles.inputs}
                placeholder="Enter Name :"
                placeholderTextColor="#ffff"
                onChangeText = {this._handleNameEntry}
                />
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
                onChangeText = {this._handlePasswordEntry}
                />
                
                <TouchableOpacity 
                onPress={this._handleSubmitEntry}
                style={styles.btn}>
                    <Text style={styles.btnText}>SUBMIT</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                        onPress={this._handleGoTo}
                        style={styles.link}>
                            <Text style={styles.linkText}>Already a User? Login</Text>
                        </TouchableOpacity>
            </KeyboardAvoidingView>
            </View>
        );
    }


}
