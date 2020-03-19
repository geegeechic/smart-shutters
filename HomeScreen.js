import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, AsyncStorage, FlatList } from 'react-native';
import { Divider } from "react-native-elements";
import 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {

  constructor(props) {  
    super(props)

    this.state = {
      data: [],
    }
    
  }
  componentDidMount = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        this.setState({data: JSON.parse(await AsyncStorage.getMultiItem(keys))})
        //await AsyncStorage.getMultiItem(keys).then(data => this.setState({ JSON.parse(data) }));
        
    } catch (error) {
        console.log(error)
    }

}
  // This will separate our listed shutters with a line
  renderSeparator = () => {  
    return (  
        <View  
            style={{  
                height: 1,  
                width: "100%",  
                backgroundColor: "#000",  
            }}  
        />  
    );  
  };  
  render() {
    return (

      <View style={styles.screen}>
        <Text style={styles.label}>
          Shutters
        </Text>

        
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => <Text style={styles.item}>{item.shutterName}</Text>}
            ItemSeparatorComponent={this.renderSeparator}
          />
      </View>


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
  label: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});