import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, TextInput,ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons, FontAwesome, MaterialCommunityIcons} from "react-native-vector-icons";


const CustomerSupport = (props) => {
    return (
        
        <View style={styles.container}>
{/*------------------------------Header Section------------------------------------------------------------------------------- */}
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
          <Text style={styles.headertext}>Customer Support</Text>
        </View>

        <View style={{ width: "10%" }}></View>
      </View>
      <ScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:'center'}}>
{/*-------------------------------------------------Contact Us-------------------------------------------------------------------------------------- */}
        <Text style={{color:'white', fontSize:20,fontWeight:'700', marginTop:10}}>Contact Us</Text>
{/*--------------------------------------------------Contact Us body----------------------------------------------------------------------------------------------------------------- */}
        <TouchableOpacity onPress={()=>{}}
        style={{width:'100%',paddingLeft:5,flexDirection:'row',marginTop:10}}
        >
        <View style={{width:'100%',paddingLeft:5,flexDirection:'row',marginTop:13}}>
        <FontAwesome name="phone" size={28} color="white" />
        <Text style={{color:'white',fontSize:16,fontWeight:'600'}}>
          {'  '}: 022-23456-3456
        </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}
        style={{width:'100%',paddingLeft:5,flexDirection:'row',marginTop:10}}
        >
        <View style={{width:'100%',paddingLeft:5,flexDirection:'row',marginTop:10}}>
        <MaterialCommunityIcons name="email" size={24} color="white" />
        <Text style={{color:'white',fontSize:16,fontWeight:'600'}}>
          {'  '}: abc@gmail.com
        </Text>
        </View>
        </TouchableOpacity>
{/*--------------------------------------FAQ header--------------------------------------------------------------------------------------------------------------- */}        
        <Text style={{color:'white', fontSize:20,fontWeight:'700', marginTop:10,marginBottom:10}}>
          FAQ
        </Text>
{/*---------------------------------------------------FAQ body----------------------------------------------------------------------------------------------------------------- */}
        <View style={{width:'100%'}}>
{/*-----------------------------------------Couldn't download songs?--------------------------------------------------------------------------------------------------------------- */}
          <TouchableOpacity style={styles.box}>
          <View>
            <Text style={{color:'white'}}>
              Couldn't download songs?
            </Text>
          </View>
          </TouchableOpacity>
{/*--------------------------------------Equalizer not working-------------------------------------------------------------------------------------------------------------------------------------------*/}
          <TouchableOpacity style={styles.box}>
          <View>
            <Text style={{color:'white'}}>
              Equalizer not working?
            </Text>
          </View>
          </TouchableOpacity>
{/*--------------------------------------Streaming Issues-------------------------------------------------------------------------------------------------------------------------*/}
          <TouchableOpacity style={styles.box}>
          <View>
            <Text style={{color:'white'}}>
              Streaming issues?
            </Text>
          </View>
          </TouchableOpacity>
{/*---------------------------------------Missing Songs-----------------------------------------------------------------------*/}
          <TouchableOpacity style={styles.box}>
          <View>
            <Text style={{color:'white'}}>
              Missing Songs?
            </Text>
          </View>
          </TouchableOpacity>
{/*---------------------------------Podcast Issue----------------------------------------------------------------------------*/}
          <TouchableOpacity style={styles.box}>
          <View>
            <Text style={{color:'white'}}>
              Podcast Issue?
            </Text>
          </View>
          </TouchableOpacity>
{/*----------------------------------player not working-----------------------------------------------------------------------------------------------------------*/}
          <TouchableOpacity style={styles.box}>
          <View>
            <Text style={{color:'white'}}>
              Player not working?
            </Text>
          </View>
          </TouchableOpacity>
{/*----------------------------------Textinput------------------------------------------------------------------------------------------------------*/}
         </View>
         <TextInput placeholder='Enter your Query...' placeholderTextColor='orange' style={styles.queryinp}/>

{/*----------------------------------Submit Button------------------------------------------------------------------------------------------------------------------------------ */}        
         <TouchableOpacity style={styles.submit}>
           <View> 
             <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>
               SUBMIT
             </Text>
           </View>
         </TouchableOpacity>
         </ScrollView>
        </View>
        
    )
}

export default CustomerSupport

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop:60,
        alignItems:"center"
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
      box:{
        height:40,
        borderWidth:1,
        borderColor:'orange',
        padding:10,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        margin:5

      },
      queryinp:{
        width:'70%',
        maxWidth:700,
        height:40,
        borderRadius:20,
        backgroundColor:'#6666',
        paddingLeft:10,
        fontSize:15,
        marginTop:10
      },
      submit:{
        width:150,
        height:50,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        borderRadius:40
      }
})
