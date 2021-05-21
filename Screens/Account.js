import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,ScrollView, ImageBackground,TextInput} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Entypo, FontAwesome, MaterialIcons } from "react-native-vector-icons"; 
const Account = (props) => {
    return (
      <View style={styles.conatiner}>
        {/*Header Section*/}

        <View style={styles.header}>
          <View style={{width:'10%'}}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                <Entypo name="menu" size={30} color="black" />
            </TouchableOpacity>
          </View>
        <View style={styles.mainContainer}>
          <Text style={{ color: "black", fontSize:22, fontWeight:'bold' }}>Account</Text>
        </View>
          <View style={{width:'10%'}}></View>
        </View>

        {/*Screen Content*/}
        {/*Profile Photo*/}
        <ImageBackground
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYGXBks17207cStyw8yIWqeX4R7xKLXgHjw&usqp=CAU'}}
        style={{width:200, height:200, marginTop:20, marginBottom:10}}
        imageStyle={{borderRadius: 300}}
        >
          <TouchableOpacity>
        <FontAwesome name='camera' size={35} color='grey'
        style={{position:'absolute', top:155, left:155}}
        />
        </TouchableOpacity>
        </ImageBackground>
        {/*Display name*/}
        <ScrollView style={{width:'100%'}}
        contentContainerStyle={{ alignItems:'center'}}
        >
        <View style={styles.userinfo}>
          <View style={{width:'90%'}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>
          Display Name
        </Text>
        <TextInput
          placeholder='Tanisha Thakur'
          placeholderTextColor='orange'
          style={styles.userinput}
        />
        </View>
        <View style={{width:'10%', justifyContent:'flex-end', paddingBottom:5}}>
          <MaterialIcons name='edit' size={30} color='white'/>
        </View>
        </View>
        {/*User Info*/}

        <View style={styles.userinfo}>
          <View style={{width:'90%'}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>
          Username
        </Text>
        <TextInput
          placeholder='tanisha19'
          placeholderTextColor='orange'
          style={styles.userinput}
        />
        </View>
        <View style={{width:'10%', justifyContent:'flex-end', paddingBottom:5}}>
          <MaterialIcons name='edit' size={30} color='white'/>
        </View>
        </View>
        {/*Email */}
        <View style={styles.userinfo}>
          <View style={{width:'90%'}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>
          Email
        </Text>
        <TextInput
          placeholder='tanisha@gmail.com'
          placeholderTextColor='orange'
          style={styles.userinput}
        />
        </View>
        <View style={{width:'10%', justifyContent:'flex-end', paddingBottom:5}}>
          <MaterialIcons name='edit' size={30} color='white'/>
        </View>
        </View>
        {/*Conact no.*/}
        <View style={styles.userinfo}>
          <View style={{width:'90%'}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>
          Contact no.
        </Text>
        <TextInput
          placeholder='9145439518'
          placeholderTextColor='orange'
          style={styles.userinput}
        />
        </View>
        <View style={{width:'10%', justifyContent:'flex-end', paddingBottom:5}}>
          <MaterialIcons name='edit' size={30} color='white'/>
        </View>
        </View>
        {/*Gender */}
        <View style={styles.userinfo}>
          <View style={{width:'90%'}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>
          Gender
        </Text>
        <TextInput
          placeholder='Female'
          placeholderTextColor='orange'
          style={styles.userinput}
        />
        </View>
        <View style={{width:'10%', justifyContent:'flex-end', paddingBottom:5}}>
          <MaterialIcons name='edit' size={30} color='white'/>
        </View>
        </View>
        <LinearGradient
        colors={["#ff8303", "orange", "orange", "#ff8303"]}
        style={styles.signout}>
        <View>
          <TouchableOpacity onPress={()=> props.navigation.navigate('Login')}>
            <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>
              SignOut
            </Text>
          </TouchableOpacity>
        </View>
        </LinearGradient>
        </ScrollView>
      </View>
    );
    
}

export default Account

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "black",
    paddingTop:60,
    alignItems:'center'
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width:'80%'
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
  userinput:{
    width:'70%',
    height:40,
    padding:8
  },
  userinfo:{
    width:'100%',
    height:70,
    padding:7,
    flexDirection:'row'
  },
  signout:{
    backgroundColor:'orange',
    height:50,
    width:150,
    borderRadius:20,
    alignItems:'center',
    marginTop:40,
    justifyContent:'center'
  }
});
