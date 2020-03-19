import React, { useState } from 'react';
//import react in our code.
import { View, TouchableOpacity, StyleSheet, AsyncStorage, TextInput } from 'react-native';
//import all the basic component we have used
import { Text } from 'native-base';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default class AddShutterScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            shutterName: '',
         }
    }

    handleShutter = text => {
        this.setState({ shutterName: text });
    };

    storeData = async () => {
        try {
            //we want to wait for the Promise returned by AsyncStorage.setItem()
            //to be resolved to the actual value before returning the value
            await AsyncStorage.setItem(this.state.shutterName, this.state.shutterName);
            this.textInput.clear();
            this.props.navigation.navigate('Home');
            
        } catch (error) {
            console.log(error.message);
        }
      }
    
    render() {
      
        return (


            <View style = {styles.screen}>
                <Text style={styles.label}>Add a shutter</Text>
                <TextInput style = {styles.input}
                    ref={input => { this.textInput = input }}
                    editable = {true}
                    placeholder = "Shutter Name"
                    placeholderTextColor = "#000000"
                    onChangeText={text => this.setState({ shutterName: text })}  
                />
                
                <TouchableHighlight
                    style = {styles.button}
                    onPress = {() => this.storeData()}>
                    <Text style={styles.text}>Submit</Text>
                </TouchableHighlight>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.text}>Cancel</Text>
                </TouchableOpacity>
            </View>
              
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    text: {
        color: 'white',
    },
    label: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
      },
    screen: {
        flex: 1, 
        backgroundColor: '#add8e6',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    input: {
        margin: 15,
        height: 40,
        width: 300,
        borderColor: '#FFFFFF',
        borderWidth: 2
     },
});