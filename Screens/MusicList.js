import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons,Octicons, MaterialIcons } from 'react-native-vector-icons';

const MusicList = ({name, details}) => {
    return (
        <View style={styles.container}>
        <Image stye={{}}/>
        <View style={{ width: "100%" ,padding:10}}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#929695" }}>
            {name}
          </Text>
          <Text style={{ fontSize: 15, color: "orange" }}>{details}</Text>
        </View>

        <View
          style={{
            width: "20%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}>

          
        </View>
      </View>
    )
}

export default MusicList

const styles = StyleSheet.create({
    container:{
        height: 150,
        width: 150,
        backgroundColor: "#2D2D2D",
        borderBottomWidth: 0.3,
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        margin:3
    }
})
