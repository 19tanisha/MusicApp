import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View,Image } from "react-native";
import { Ionicons , MaterialIcons} from "react-native-vector-icons";


const Updates = (props) => {
    return (
        
        <View style={styles.container}>
{/*----------------------------------Header Section------------------------------------------------------------------------------------------------ */}
            <View style={styles.header}>
        <View
          style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Settings")}
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

          <Text style={styles.headertext}>Updates</Text>
        </View>

        <View style={{ width: "10%" }}></View>
      </View>
{/*----------------------------------Bell Image------------------------------------------------------------------------------------------------ */}
      <Image source={require('../../assets/bell.jpeg')} style={styles.bell}/>
{/*--------------------------------------Content------------------------------------------------------------------------------------------------- */}
        <View style={{width:'100%',padding:10}}>
          <Text style={{fontWeight:'600',color:'white', fontSize:17,marginTop:10}}>
            Software Update Information
          </Text>
          <Text style={styles.updateinfo}>
            . Version:T1A9N0I4S0H1A
          </Text>
          <Text style={styles.updateinfo}>
            . Size:20.21 MB
          </Text>
          <Text style={styles.updateinfo}>
            . Security Patch Level: 19th April 2021
          </Text>
        </View>
{/*---------------------------------What's New-------------------------------------------------------------------------------------- */}
            
            <View style={{width:'100%', padding:10}}>
            <View style={{flexDirection:'row', width:'100%'}}>
              <Text style={{fontWeight:'600',color:'white', fontSize:17,paddingRight:10}}>
                What's New
              </Text>
              <MaterialIcons name="celebration" size={24} color="white" />
              </View>
              <Text style={styles.updateinfo}>
            . Updated Podcast
          </Text>
          <Text style={styles.updateinfo}>
            . New navigation feature available
          </Text>
          <Text style={styles.updateinfo}>
            . Improved streaming Quality
          </Text>

            </View>
            <View style={{width:'100%', padding:10}}>
           <Text style={{fontWeight:'600',color:'white', fontSize:17,marginTop:10}}>
            
            Learn more at
          </Text>
          <Text style={styles.updateinfo}>
            . http://doc.horenmusik.com/asdfdg/asdfc/doc.html
          </Text>
           </View>
        </View>
    )
}

export default Updates

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop:60,
        alignItems:'center'
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
      bell:{
        height:200,
        width:200,
        marginTop:30,
        marginBottom:20

      },
      updateinfo:{
        fontWeight:'400',
        color:'grey',
        fontSize:15,
        marginTop:5,
        marginLeft:15
      }
})
