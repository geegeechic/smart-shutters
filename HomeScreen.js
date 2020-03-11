

import React from 'react';
import { Divider } from 'react-native-elements';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import ListItems from './ListItems';

//import all the basic component we have used


export default class HomeScreen extends React.Component {


  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.label}>
          Shutters
        </Text>
        <ListItems style={styles.list}/>
        <Divider style={{ backgroundColor: 'black', height: 2 }}/>
        <Text style={styles.label}>
          Groups
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Group')}>
            <Text style= {styles.text}>
              Create Group
            </Text>
          </TouchableHighlight>
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
    flexDirection: 'column', 
    justifyContent: 'center', 
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3e68f0',
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
  label: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});