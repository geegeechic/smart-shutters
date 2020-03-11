import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options


import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';

import HomeScreen from './HomeScreen';
import ScheduleScreen from './ScheduleScreen';
import AddShutterScreen from './AddShutterScreen';
import GroupScreen from './GroupScreen';


const HomeStack = createStackNavigator(
    {
        //Definition of Navigation from home screen
        Home: { screen: HomeScreen },
        Group: { screen: GroupScreen },
    },
    {
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            title: 'Blink Shutters',
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerStyle: {
                backgroundColor: '#3e68f0',
            },
            
        },
    }
);
const ScheduleStack = createStackNavigator(
    {
        //Definition of Navigation from schedule screen
        Schedule: { screen: ScheduleScreen },
    },
    {
        defaultNavigationOptions: {
            //Header customization of the particular Screen
            title: 'Blink Shutters',
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerStyle: {
                backgroundColor: '#3e68f0',  
            },
        },
    }
  );


const App = createBottomTabNavigator(
    {
        Home: { 
            screen: HomeStack, 
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name= 'ios-home' color={tintColor} size={25}/>
                ),
              },
        
        },
        AddShutter: { 
            screen: AddShutterScreen,
            navigationOptions: {
                title: "Search Shutters",
                tabBarIcon: ({tintColor}) => (
                <View
                    style={{
                        position: 'absolute',
                        bottom: 20, // space from bottombar
                        height: 58,
                        width: 58,
                        borderRadius: 58,
                        backgroundColor: '#000000',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Ionicons name= 'ios-search' color={tintColor} size={40}/>
                </View>
                ),
            },
        },
        Schedule: { 
            screen: ScheduleStack,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Ionicons name= 'ios-calendar' color={tintColor} size={25}/>
                    </View>
                ),
              },
        
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: 'yellow',
            inactiveTintColor: '#fff',
            showIcon: true,
            style: {
                backgroundColor: '#3e68f0',
              }
        },
    }
);
export default createAppContainer(App);