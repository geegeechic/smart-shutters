import React from 'react';
//import react in our code.

import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
//import all the basic component we have used
 
export default class HomeScreen extends React.Component {
  //Home Screen to show in Home Option

  render() {
    return (
      
      <View style={styles.screen}>
        <Text style={{ marginTop: 50, fontSize: 25 }}> No Shutters Added Yet </Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AddShutter')}>
            <Text>Add Shutter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Group')}>
            <Text>Create Group </Text>
          </TouchableOpacity>

        <Image style={styles.logo} source={require('./assets/Logo.png')} />
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',  
  },
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  logo: {
    height: 180,
    width: 180,
    margin: 60,
  },
});