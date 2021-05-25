import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons, MaterialIcons, AntDesign} from "react-native-vector-icons";

const MusicList = ({ name, details }) => {
  return (
    <View style={styles.container}>
         <View style={{ width: "90%", flexDirection: "row",alignItems:'center' }}>
           <View style={{width:'10%',paddingLeft:10}}>
         <Ionicons name="musical-notes-sharp" size={30} color="#929695" />
         </View>
        <View style={{width:'90%', marginLeft:15}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.details}>{details}</Text>
        </View>
      </View>

      <View style={{ width: "10%", alignItems: "flex-end",paddingRight:10 }}>
        <AntDesign name="heart" size={24} color='#929695' />
      </View>
      </View>
    
  );
};

export default MusicList;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: "#2D2D2D",
    borderBottomWidth: 0.3,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth:0.5
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "orange",
  },
  details: {
    color: "#929695",
  },
});