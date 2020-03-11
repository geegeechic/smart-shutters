import React, { useState } from 'react';
//import react in our code.
import { View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import { Text } from 'native-base';


export default class AddShutterScreen extends React.Component {

    render() {
      
        return (
            <View style={styles.screen}>
                <Text>Searching for shutter...</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
              
        );
    }
}

const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
    },

    screen: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
});