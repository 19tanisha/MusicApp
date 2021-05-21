import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from "react-native-vector-icons"; 
import MyDownloads from '../MyMusic/MyDownloads';
import MyLibrary from '../MyMusic/MyLibrary';
import MyFavs from '../MyMusic/MyFavs';
const MyMusic = (props) => {
    return (
      <View style={styles.conatiner}>
        <View style={styles.header}>
         
        <View style={styles.mainContainer}>
          <Text style={{ color: "black", fontSize:22, fontWeight:'bold' }}>
            MyMusic
            </Text>
        </View>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={()=> props.navigation.navigate('MyDownloads')}
        style={{width:'100%', height:50}}>
          <View style={styles.list}>
            <View style={{width:'10%', justifyContent:'center'}}>
              <Ionicons name='play-circle-outline' size={35}/>
            </View>
            <View style={{width:'80%', justifyContent:'center'}}>
            <Text style={{fontWeight:'700'}}>
              My Downloads
            </Text>
            <Text style={{fontSize:12, fontWeight:'500'}}>
              6 songs
            </Text>
            </View>
            <View style={{width:'10%', justifyContent:'center', alignItems:'flex-end'}}>
            <Ionicons name='play-circle-outline' size={35}/>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={0.5} onPress={()=> props.navigation.navigate('MyFavs')}
        style={{width:'100%', height:50}}>
          <View style={styles.list}>
          <View style={{width:'10%', justifyContent:'center'}}>
              <MaterialIcons name='favorite-outline' size={30}/>
            </View>
            <View style={{width:'80%', justifyContent:'center'}}>
            <Text style={{fontWeight:'700'}}>
              My Favorites
            </Text>
            <Text style={{fontSize:12, fontWeight:'500'}}>
              6 songs
            </Text>
            </View>
            <View style={{width:'10%', justifyContent:'center', alignItems:'flex-end'}}>
              <AntDesign name='right' size={24}/>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={0.5} onPress={()=> props.navigation.navigate('MyLibrary')}
        style={{width:'100%', height:50}}>
          <View style={styles.list}>
          <View style={{width:'10%', justifyContent:'center'}}>
              <MaterialIcons name='library-music' size={30}/>
            </View>
            <View style={{width:'80%', justifyContent:'center'}}>
            <Text style={{fontWeight:'700'}}>
              My Library
            </Text>
            <Text style={{fontSize:12, fontWeight:'500'}}>
              6 songs
            </Text>
            </View>
            <View style={{width:'10%', justifyContent:'center', alignItems:'flex-end'}}>
              <AntDesign name='right' size={24}/>
            </View>
            </View>
        </TouchableOpacity>
        
      </View>
    );
}

export default MyMusic

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "black",
    paddingTop:60
  },
  mainContainer: {
    alignItems:'center',
    width:'100%'
  },
  header: {
    /*flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,*/
    width:'100%',
    height:60,
    backgroundColor:'#ff8303',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  list:{
    width:'100%',
     height:50,
      backgroundColor:'grey',
      padding:5,
      flexDirection:'row'

  }
});
