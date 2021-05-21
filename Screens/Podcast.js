import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { Ionicons } from "react-native-vector-icons"; 
const Podcast = ({navigation}) => {
    return (
      <View style={styles.conatiner}>
        <View style={styles.header}>
          <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <Text style={{ color: "black", fontSize:22, fontWeight:'bold' }}>Podcast</Text>
        </View>
        </View>
      </View>
    );
}

export default Podcast

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "black",
    paddingTop:60
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    /*flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,*/
    width:'100%',
    height:50,
    backgroundColor:'#ff8303',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
});
