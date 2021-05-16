import React from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity , ScrollView} from 'react-native'
import { Entypo, FontAwesome } from 'react-native-vector-icons'; 
import MusicList from '../CustomList/MusicList'
import { StatusBar } from 'expo-status-bar'
const Home = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <StatusBar style='light'/>
            <View style={styles.header}>
                
                <View style={{width:'10%'}}>
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Entypo name="menu" size={28} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{width:'80%', alignItems:'center'}}>
                    <Text style={{fontSize:22, fontWeight:'bold'}}>
                      Music
                    </Text>
                    
                </View>

                <View style={{width:'10%'}}>
                <FontAwesome name="search" size={24} color="black" />
                
                </View>
                </View>
                {/*Header section over */}
                <View style={styles.search}>
                <FontAwesome name="search" size={24} color="black" />
                <TextInput
                placeholderTextColor='#ff8303'
                placeholder='Search...'
                style={{paddingLeft:5, width:'90%',fontSize:15}}
                />
            </View>
            <ScrollView style={{width:'100%'}}>
            <MusicList name='Lut Gaya' details='Jubin'/>
            <MusicList name='Tere Bin' details='Atif Aslam'/>
            <MusicList name='Peheli Daffa' details='Atif Aslam'/>
            <MusicList name='Pal Pal' details='Kishore Kumar'/>
            <MusicList name='Lag ja Gale' details='Lata Mangeshkar'/>
            <MusicList name='My Heart Will Go On' details='Celine Dion'/>
            
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flex:1,
        backgroundColor:'black',
        paddingTop:50,
        
    },
    header:{
        width:'100%',
        height:50,
        backgroundColor:'#ff8303',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'

    },
    search:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'70%',
        alignItems:'center',
        height:35,
        borderRadius:20,
        margin:6,
        paddingLeft:10
    }
})
