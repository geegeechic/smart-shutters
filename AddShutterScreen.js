import React, { useState } from 'react';
//import react in our code.
import { View, TouchableOpacity, StyleSheet,Button,TextInput } from 'react-native';
//import all the basic component we have used
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Content, Item, Input, Text } from 'native-base';
import { Overlay } from 'react-native-elements';






export default class AddShutterScreen extends React.Component {

    constructor() {
        super()
        this.handleChangeText = this.handleChangeText.bind(this)
    }
    handleChangeText(newText) {
        this.setState({
            value: newText
        })
    }

    render() {
      
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

    one: {
        color: 'brown',
        fontWeight: 'bold',
        fontSize: 25,
    },
    two: {
        flex: 1,
        padding : 20,
        alignItems:'center',
    },
    three: {
        
        borderBottomColor:'black',
        padding: 10,
        alignItems: 'center',
    },
});