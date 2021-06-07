import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View , ScrollView} from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
import MusicList from '../Screens/MusicList'

const MyFavs = (props) => {
    return (
        
        <View style={styles.container}>
{/*--------------------------------------Header Section------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
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
          <Text style={styles.headertext}>My Favorites</Text>
        </View>

        <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}>
        <Ionicons name="search" size={30} color="black" />
        </View>
      </View>
{/*--------------------------------------Music list------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <ScrollView style={{width:'100%'}}>
  <TouchableOpacity>
  <MusicList name='Perfect' details='Ed Sheeran'/>
  </TouchableOpacity>

  <TouchableOpacity>
  <MusicList name='Without Me' details='Halsey'/>
  </TouchableOpacity>

  <TouchableOpacity>
  <MusicList name='Thinking Out Loud' details='Ed Sheeran'/>
  </TouchableOpacity>

  <TouchableOpacity>
  <MusicList name='Love Story' details='Taylor Swift'/>
  </TouchableOpacity>

  <TouchableOpacity>
  <MusicList name='Lag ja Gale' details='Lata Mangeshkar'/>
  </TouchableOpacity>

  <TouchableOpacity>
  <MusicList name='My Heart Will Go On' details='Celine Dion'/>
  </TouchableOpacity>

  <TouchableOpacity>
  <MusicList name='Perfect' details='Ed Sheeran'/>
  </TouchableOpacity>

  <TouchableOpacity>
  <MusicList name='Without Me' details='Halsey'/>
  </TouchableOpacity>

  <TouchableOpacity>
  <MusicList name='Thinking Out Loud' details='Ed Sheeran'/>
  </TouchableOpacity>

  <TouchableOpacity>
  <MusicList name='Love Story' details='Taylor Swift'/>
  </TouchableOpacity>

  <TouchableOpacity>
  <MusicList name='Lag ja Gale' details='Lata Mangeshkar'/>
  </TouchableOpacity>

  <TouchableOpacity>
  <MusicList name='My Heart Will Go On' details='Celine Dion'/>
  </TouchableOpacity>
 

</ScrollView>
{/*--------------------------------------END------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        </View>
    )
}

export default MyFavs

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
