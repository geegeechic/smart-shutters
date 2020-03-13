import * as React from 'react';
import { Text, View, ListView, StyleSheet, AsyncStorage } from 'react-native';

export default class ListItems extends React.Component {


    
    constructor(props) {  
        super(props)
        
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds
        }

        
    }

    componentDidMount = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const value = await AsyncStorage.getItem(keys);
            if (value !== null) {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(JSON.parse(value))
                });
            }
        } catch (error) {
            console.log(error)
        }
    
    }

    render () {
        this.componentDidMount()
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>  
                    <Text style={styles.rowViewContainer}>
                        {rowData}  
                    </Text>  
                    }  
                renderSeparator={(rowId) =>  
                    <View key={rowId} style={styles.separator} />}//adding separation
            />
            
        )
    }
}

const styles = StyleSheet.create({
    container: {  
        flex: 1,  
        backgroundColor: "#FFFFFF"  
    },  
    separator: {  
        height: 0.5, backgroundColor: "#000"  
    },  
    rowViewContainer: {  
        flex: 1,  
        paddingRight: 15,  
        paddingTop: 13,  
        paddingBottom: 13,  
        borderBottomWidth: 0.5,  
        borderColor: '#c9c9c9',  
        flexDirection: 'row',  
        alignItems: 'center',  
        fontSize: 20,  
        marginLeft: 10,  
    },  
});