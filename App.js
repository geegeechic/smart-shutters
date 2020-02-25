//This is an example code for Bottom Navigation//
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';


//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import ScheduleScreen from './ScheduleScreen';
import AddShutterScreen from './AddShutterScreen';
import GroupScreen from './GroupScreen';


const HomeStack = createStackNavigator(
    {
        //Definition of Navigation from home screen
        Home: { screen: HomeScreen },
        AddShutter: { screen: AddShutterScreen },
        Group: { screen: GroupScreen },
    },
    {
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            title: 'Smart Shutters',
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'Futura',
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
            title: 'Smart Shutters',
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'Futura',
            
            },
            headerStyle: {
                backgroundColor: '#3e68f0',
                
            },
            
        },
    }
  );


const App = createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        Schedule: { screen: ScheduleStack },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Schedule') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        
        tabBarOptions: {
            activeTintColor: '#3e68f0',
            inactiveTintColor: 'gray',
        },
    }
);
export default createAppContainer(App);