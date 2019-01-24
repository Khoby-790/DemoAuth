import React from 'react';
import {
    Image,
    Button,
     View,
    Text,
    TouchableOpacity} from 'react-native';
import styles from '../Css/styles';


export default class Settings extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../Images/logout.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
      

      _handleLogout = () =>{
        this.props.navigation.navigate("login");
      }
    
      render() {
        return (
            <View style={styles.container}>
            <Text>kmfd User Logged In</Text>
            <TouchableOpacity 
                    onPress={this._handleLogout}
                    style={styles.link}>
                        <Text style={styles.linkText}>Logout</Text>
                    </TouchableOpacity>
                    <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title="Go to Dashboard"
          />
        </View>
        );
      }
}