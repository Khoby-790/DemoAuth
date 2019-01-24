import React from 'react';
import {Image,Button,View,ScrollView} from 'react-native';
import styles from '../Css/styles';



export default class Dashboard extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../Images/logo.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
    
      render() {
        return (
          <View style={styles.container}>
            <View style={styles.scrollTop}>
            <ScrollView horizontal={true} >
                <View style={styles.card}>
                  <Image
                    source={require('../Images/logo.png')}
                    style={styles.icona}
                  />
                </View>
                <View style={styles.card}>
                  <Image
                      source={require('../Images/wifi.png')}
                      style={styles.icona}
                    />
                </View>
                <View style={styles.card}>
                  <Image
                      source={require('../Images/fb.png')}
                      style={styles.icona}
                    />
                </View>
                <View style={styles.card}>
                  <Image
                        source={require('../Images/env.png')}
                        style={styles.icona}
                      />
                </View>
                <View style={styles.card}>
                    <Image
                        source={require('../Images/g.png')}
                        style={styles.icona}
                      />
                </View>
            </ScrollView>
            </View>
            <View style={styles.scrollBottom}>
            <ScrollView>
              <View style={styles.row}>
                <View style={styles.cardBig}></View>
                <View style={styles.cardBig}></View>
              </View>
              <View style={styles.row}>
                <View style={styles.cardBig}></View>
                <View style={styles.cardBig}></View>
              </View>
              <View style={styles.row}>
                <View style={styles.cardBig}></View>
                <View style={styles.cardBig}></View>
              </View>
              <View style={styles.row}>
                <View style={styles.cardBig}></View>
                <View style={styles.cardBig}></View>
              </View>
            </ScrollView>
            </View>
          </View>
        );
      }
}