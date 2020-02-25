
//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
 
export default class DetailsScreen extends React.Component {
  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
            <Text>  About Me:</Text>
            <Text>Smart Shutter is an app that controls </Text>
            <Text>the shutter through an app. </Text>
      </View>
    );
  }
}