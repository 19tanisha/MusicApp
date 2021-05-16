import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Settings from './Screens/Settings';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Notifications from './Screens/Notifications';
import Account from './Screens/Account';
import {Ionicons,MaterialCommunityIcons} from 'react-native-vector-icons'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import SignOut from './Screens/SignOut';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name = 'Login' component={Login}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'SignUp' component={SignUp}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'Home' component={Tabs}
        options={{
          headerShown: false
        }}
        />
        </Stack.Navigator>
    </NavigationContainer>
      
    
  );
}

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator 
    activeColor='#ff8303'
    shifting={true}
    barStyle={{backgroundColor:'black'}}
    >
      <Tab.Screen name="Home" component={DrawerNavigation}
      options={{
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name="home" size={24} color={color} />
        ),
      }}
      />
      <Tab.Screen name="Settings" component={Settings}
      options={{
        tabBarIcon:({color})=>(
          <Ionicons name="settings" size={24} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigation(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name = 'Home' component={Home}/>
      <Drawer.Screen name = 'Notifications' component={Notifications}/>
      <Drawer.Screen name= 'Account' component={Account}/>
      <Drawer.Screen name= 'SignOut' component={SignOut}/>
    </Drawer.Navigator>
  )
}


