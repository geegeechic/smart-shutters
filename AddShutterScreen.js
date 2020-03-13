import React, { useState } from 'react';
//import react in our code.
import { View, TouchableOpacity, StyleSheet, AsyncStorage, TextInput } from 'react-native';
//import all the basic component we have used
import { Text } from 'native-base';


export default class AddShutterScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            keyID: 0,
            shutterName: '',
         }

    }
    incrementCount = () => {
        this.setState(prevState => ({ count: prevState.keyID + 1 }));
      }
    handleShutterName = (text) => {
        this.setState({ shutterName: text })
     }
    store = () => {
      
        AsyncStorage.setItem(this.state.keyID, this.state.shutterName);
        console.log(this.state.shutterName)
        this.incrementCount();
        this.props.navigation.navigate('Home');

    }
    render() {
      
        return (


            <View style = {styles.screen}>
                <Text>Add a shutter</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Shutter Name"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleShutterName}/>
                
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {
                        () => this.store()
                    }>
                    <Text>Submit</Text>
                </TouchableOpacity>
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
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
});