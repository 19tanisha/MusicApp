import React from 'react'
import { StyleSheet, Text, View , Button, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
            source={{uri:'https://t4.ftcdn.net/jpg/02/82/31/75/240_F_282317522_WOxb2pk2ZXCv44fh7GnlrInr0T2TS4ao.jpg'}}
            style={{width:'100%', height:'100%', justifyContent:'center',alignItems:'center'}}
            >
            <TextInput
            placeholderTextColor='black'
            style={styles.inp}
            placeholder= 'Username:'
            />
            <TextInput
            placeholderTextColor='black'
            style={styles.inp}
            placeholder= 'Email:'
            />
            <TextInput
            placeholderTextColor='black'
            style={styles.inp}
            placeholder= 'Password:'
            />
             
             <LinearGradient 
                style={styles.button}
                colors={['#ff8303','#ff8303','orange', 'orange']}
            >
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}
            
            >
                <View style={{height:50,width:150,alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.text}>
                    SignUp
                </Text>
                </View>
            </TouchableOpacity>
            </LinearGradient>
           

            <View style = {{flexDirection:'row', marginTop:10, alignItems:'center'}}>

            <Text  style={{fontSize:15, color:'white'}}>
               Already have an account?
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}
            
            >
                <Text style={{fontWeight:'bold', fontSize:18, color:'orange'}}>
                    {' '}Login
                </Text>
            </TouchableOpacity>
           
        
            </View>
            </ImageBackground>
        </View>

        
    )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:'#bdd2b6'
        
    },
    inp:{
    height:40,
    width:300,
    backgroundColor:'#ff8303',
    borderColor:'black',
    borderRadius:10,
    marginBottom:10,
    paddingLeft:10
    },

    text:{
        fontSize:18,
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold',
        color:'black'
    },
    button:{
        backgroundColor:'#ff8303',
        borderRadius:15,
        height:40,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        
    }
    
    
})
