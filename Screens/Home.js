import React from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity , ScrollView} from 'react-native'
import { Entypo, FontAwesome } from 'react-native-vector-icons'; 
import MusicList from './MusicList'
import { StatusBar } from 'expo-status-bar';
import MusicCatog from '../Home/MusicCatog'
import RecentlyPlayed from '../Home/RecentlyPlayed'
import TodaysPick from '../Home/TodaysPick';
import Trending from '../Home/Trending';
const Home = (props) => {
    return (
        <View style = {styles.container}>
            <StatusBar style='light'/>
            <View style={styles.header}>
                
                <View style={{width:'10%'}}>
                <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                    <Entypo name="menu" size={28} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{width:'80%', alignItems:'center'}}>
                    <Text style={{fontSize:22, fontWeight:'bold'}}>
                      Music
                    </Text>
                    
                </View>
                </View>

            <View style={styles.search}>
                <View style={{flexDirection:'row', width:'90%'}}>
                <FontAwesome name="search" size={24} color="black" />
                <TextInput
                placeholderTextColor='#ff8303'
                placeholder='Search...'
                style={{paddingLeft:5, width:'90%',fontSize:15}}
                />
                </View>
                <View style={{width:'10%', alignItems:'flex-end', paddingRight:7}}>
                <FontAwesome name="microphone" size={24} color="black" />
                </View>
            </View>
            <ScrollView style={{flex:1, width:'100%'}}>
            {/*<View style={{width:'100%', height:200}}>
            <View style={{width:'100%', padding:5}}>
            <Text  style={{fontSize:18,color:'white',fontWeight:'bold', justifyContent:'center' }}>Recently Played..</Text>
            </View>
        
            <ScrollView style={{width:'100%'}} horizontal={true}>
            <MusicList name='Perfect' details='Ed Sheeran'/>
            <MusicList name='Without Me' details='Halsey'/>
            <MusicList name='Thinking Out Loud' details='Ed Sheeran'/>
            <MusicList name='Love Story' details='Taylor Swift'/>
            <MusicList name='Lag ja Gale' details='Lata Mangeshkar'/>
            <MusicList name='My Heart Will Go On' details='Celine Dion'/>
           
            </ScrollView>
            </View>
            <View style={{width:'100%', height:200}}>
            <View style={{width:'100%', padding:5}}>
            <Text  style={{fontSize:18,color:'white',fontWeight:'bold', justifyContent:'center' }}>Recently Played..</Text>
            </View>
            <ScrollView style={{width:'100%', height:250}} horizontal={true}>
            <MusicList name='Perfect' details='Ed Sheeran'/>
            <MusicList name='Without Me' details='Halsey'/>
            <MusicList name='Thinking Out Loud' details='Ed Sheeran'/>
            <MusicList name='Love Story' details='Taylor Swift'/>
            <MusicList name='Lag ja Gale' details='Lata Mangeshkar'/>
            <MusicList name='My Heart Will Go On' details='Celine Dion'/>
            
            </ScrollView>
    </View>*/}

            <MusicCatog navigation={props.navigation}/>
            <RecentlyPlayed navigation={props.navigation}/>
            <TodaysPick navigation={props.navigation}/>
            <Trending navigation={props.navigation}/>
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
        
    },
    header:{
        width:'100%',
        height:50,
        backgroundColor:'#ff8303',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:40

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
