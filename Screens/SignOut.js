import React from 'react'
import { StyleSheet, Text, View,  TouchableOpacity  } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import { Ionicons } from "react-native-vector-icons";

const SignOut = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="arrow-back" size={28} color="#ff8303" />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <LinearGradient 
                style={styles.button}
                colors={['#ff8303','#ff8303','orange', 'orange']}
            >
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}
            
            >
                <View style={{height:50,width:150,alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.text}>
                    SignOut
                </Text>
                </View>
            </TouchableOpacity>
            </LinearGradient>
        </View>
        </View>
    )
}

export default SignOut

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        paddingTop:50
    },
    
    text:{
        fontSize:18,
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold'
        
    },
    button:{
        backgroundColor:'#ff8303',
        borderRadius:15,
        height:50,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        marginTop:150
    },
    header: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 10,
      },
    
})
