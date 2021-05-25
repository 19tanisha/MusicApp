import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
import MusicList from '../Screens/MusicList'

const MyLibrary = (props) => {
    return (
        
        <View style={styles.container}>
            <View style={styles.header}>
        <View
          style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("MyMusic")}
          >
            <Ionicons name="chevron-back" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.headertext}>My Library</Text>
        </View>

        <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}>
        <Ionicons name="search" size={30} color="black" />
        </View>
      </View>
      <ScrollView style={{width:'100%'}}>
  
  <MusicList name='Perfect' details='Ed Sheeran'/>
  <MusicList name='Without Me' details='Halsey'/>
  <MusicList name='Thinking Out Loud' details='Ed Sheeran'/>
  <MusicList name='Love Story' details='Taylor Swift'/>
  <MusicList name='Lag ja Gale' details='Lata Mangeshkar'/>
  <MusicList name='My Heart Will Go On' details='Celine Dion'/>
  <MusicList name='Perfect' details='Ed Sheeran'/>
  <MusicList name='Without Me' details='Halsey'/>
  <MusicList name='Thinking Out Loud' details='Ed Sheeran'/>
  <MusicList name='Love Story' details='Taylor Swift'/>
  <MusicList name='Lag ja Gale' details='Lata Mangeshkar'/>
  <MusicList name='My Heart Will Go On' details='Celine Dion'/>
  
 

</ScrollView>

        </View>
    )
}

export default MyLibrary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop:60
      },
      header: {
        backgroundColor: "#ff8303",
        width: "100%",
        height: 60,
        flexDirection: "row",
      },
      headertext: {
        fontSize: 22,
        fontWeight: "bold",
      },
})
