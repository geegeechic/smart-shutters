import React from 'react';
//import react in our code.
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
//import all the basic component we have used

export default class ScheduleScreen extends React.Component {
    //Schedule Screen
    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.label}>Scheduled Tasks</Text>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}>
                        <Text style={styles.text}>
                        Create Task
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column', 
         
        backgroundColor: 'white',
      },
    label: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 10,
        width: 200,
        marginTop: 16,
        marginBottom: 50,
      },
    buttonContainer: {
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
});