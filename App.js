import React from 'react';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Settings from './Screens/Settings';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Account from './Screens/Account';
import {Ionicons,MaterialCommunityIcons, FontAwesome} from 'react-native-vector-icons'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import DrawerContent from './Screens/DrawerContent'
import MyMusic from './Screens/MyMusic';
import Podcast from './Screens/Podcast';
import LanguagePref from './Settings/LanguagePref';
import StreamingQuality from './Settings/StreamingQuality';
import DownloadQuality from './Settings/DownloadQuality';
import Eqalizer from './Settings/Eqalizer';
import MyDownloads from './MyMusic/MyDownloads';
import MyFavs from './MyMusic/MyFavs';
import MyLibrary from './MyMusic/MyLibrary';
import Navigation from './Settings/Navigation';
import CustomerSupport from './Settings/HelpAndSupport/CustomerSupport';
import Updates from './Settings/HelpAndSupport/Updates';
import MusicPlayer from './Screens/MusicPlayer';
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
        <Stack.Screen name = 'HomeScreen' component={DrawerNavigator}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'LanguagePref' component={LanguagePref}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'StreamingQuality' component={StreamingQuality}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'DownloadQuality' component={DownloadQuality}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'Eqalizer' component={Eqalizer}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'MyDownloads' component={MyDownloads}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'MyFavs' component={MyFavs}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'MyLibrary' component={MyLibrary}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'Navigation' component={Navigation}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'CustomerSupport' component={CustomerSupport}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name = 'Updates' component={Updates}
        options={{
          headerShown: false
        }}
        />
         <Stack.Screen name = 'MusicPlayer' component={MusicPlayer}
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
      
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name="home" size={24} color={color} />
        ),
      }}
      />
       <Tab.Screen name="Podcast" component={Podcast}
      options={{
        tabBarIcon:({color})=>(
          <FontAwesome name="podcast" size={24} color={color} />
        ),
      }}
      />
      <Tab.Screen name="MyMusic" component={MyMusic}
      options={{
        tabBarIcon:({color})=>(
          <Ionicons name="ios-musical-notes" size={24} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator(){
  return(
    <Drawer.Navigator drawerContent={(props) => <DrawerContent{...props}/>}>
      <Drawer.Screen name = 'Music' component={Tabs}/>
      <Drawer.Screen name = 'Settings' component={Settings}/>
      <Drawer.Screen name= 'Account' component={Account}/>
    </Drawer.Navigator>
  )
}


