import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Switch, ScrollView} from 'react-native'
import { Ionicons,MaterialIcons ,Feather, Entypo, FontAwesome5,AntDesign ,MaterialCommunityIcons} from "react-native-vector-icons";
import LanguagePref from '../Settings/LanguagePref'
import StreamingQuality from '../Settings/StreamingQuality'
import DownloadQuality from '../Settings/DownloadQuality' 
import Eqalizer from '../Settings/Eqalizer'   

const Settings = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
      <View style={styles.conatiner}>

{/*-------------------------------------------Header Section----------------------------------------------------------------------------- */}
        <View style={styles.header}>
          <View style={{width:'10%'}}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                <Entypo name="menu" size={28} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.mainContainer}>
            <Text style={{ color: "black", fontSize:22, fontWeight:'bold' }}>Settings</Text>
          </View>

          <View style={{width:'10%'}}></View>
        
        </View>
{/*----------------------------------------Language Settings Section---------------------------------------------------------------- */}
        <ScrollView style={{width:'100%'}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white', padding:5}}>
          Language Settings
        </Text>
{/*---------------------------------------Language Preferance Section---------------------------------------------------------------- */}
        <TouchableOpacity
        onPress={() => props.navigation.navigate("LanguagePref")}
      >
        <View style={styles.list}>
          <View style={{ color: "black", width:'90%' }}>
            <Text style={{ color: "white", fontSize:16,fontWeight:'600' }}>Language Preference</Text>
            <Text style={{color:'grey', fontSize:13}}>
              Set your language.
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%" }}>
            <FontAwesome5 name="language" size={28} color="white" />
          </View>
        </View>
      </TouchableOpacity>
{/*-----------------------------------------Music Quality Header Section---------------------------------------------------------------- */}
        <Text style={{fontSize:18, fontWeight:'bold', color:'white', padding:5}}>
          Music Quality
        </Text>
{/*-------------------------------------------Equalizer Section---------------------------------------------------------------- */}
        <TouchableOpacity onPress={()=> props.navigation.navigate('Eqalizer')}>
        
          <View style={styles.list}>
            <View style={{ color: "black", width:'90%' }}>
          <Text style={{ color: "white", fontSize:16,fontWeight:'600' }}>
            Eqalizer
          </Text>
          <Text style={{color:'grey', fontSize:13}}>
              Manipulate frequency
          </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%" }}>
          <MaterialIcons name="equalizer" size={28} color="white" />
          </View>
        </View>
        
        </TouchableOpacity>
{/*------------------------------------------Download Quality Section---------------------------------------------------------------- */}      
        
        
          <View style={styles.list}>
            <View style={{ color: "black", width:'90%' }}>
          <Text style={{ color: "white", fontSize:16,fontWeight:'600' }}>
            Download Quality
          </Text>
          <Text style={{color:'grey', fontSize:13}}>
              Set your download quality.
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%" }}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="quality-low" size={28} color="orange" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name="quality-medium" size={28} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name="quality-high" size={28} color="white" />
            </TouchableOpacity>

          </View>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%" }}>
          <MaterialCommunityIcons name="equalizer-outline" size={28} color="white" />
          </View>
        </View>
        
    
{/*--------------------------------------Streaming Quality Section---------------------------------------------------------------- */}     
        
        
          <View style={styles.list}>
            <View style={{ color: "black", width:'90%' }}>
          <Text style={{ color: "white", fontSize:16,fontWeight:'600' }}>
            Streaming Quality
          </Text>
          <Text style={{color:'grey', fontSize:13}}>
              Set your streaming quality
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%" }}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="quality-low" size={28} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name="quality-medium" size={28} color="orange" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name="quality-high" size={28} color="white" />
            </TouchableOpacity>

          </View>
          </View>
        </View>
        
     
{/*--------------------------------------------------------------Data Usage Section----------------------------------------------------------------*/}
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{color:'white',padding:5, fontWeight:'bold',fontSize:18}}>
              Data Usage
          </Text>
          <Text style={{color:'grey',padding:5, marginTop:3, marginLeft:10}}>
              218.90Mb
          </Text>
        </View>
 {/*-----------------------------------------------------------Data Saver Section----------------------------------------------------------------*/}       
        <View style={styles.list}>
          <View style={{ color: "black", width:'80%' }}>
            <Text style={{ color: "white", fontSize:16,fontWeight:'600' }}>
              Data Saver
            </Text>
            
            <Text style={{color:'grey', fontSize:13}}>
              Sets your music quality to low and disables artist canvaces
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "20%",padding:5 }}>
          <Switch
              trackColor={{ false: "#767577", true: "orange" }}
              thumbColor={isEnabled ? "black" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
{/*-----------------------------------------------------------Data Usage Warning Section----------------------------------------------------------*/}       
        <View style={styles.list}>
          <View style={{ color: "black", width:'90%' }}>
            <Text style={{ color: "white", fontSize:16,fontWeight:'600' }}>Data Usage Warning</Text>
            <Text style={{color:'grey', fontSize:13}}>
              Warns about excess data usage
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%", padding:5}}>
          <Switch
              trackColor={{ false: "#767577", true: "orange" }}
              thumbColor={isEnabled ? "yellow" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
{/*------------------------------------------------------Connect to apps header----------------------------------------------------------*/}       
        <Text style={{color:'white',padding:5, fontWeight:'bold',fontSize:18}}>
          Connect to Apps
        </Text>
{/*-----------------------------------------------------------Navigation Section----------------------------------------------------------*/}       
        <TouchableOpacity onPress={() => props.navigation.navigate('Navigation')}>
        <View style={styles.list}>
          <View style={{ color: "black", width:'80%' }}>
            <Text style={{ color: "white", fontSize:16,fontWeight:'600' }}>
            Navigation
            </Text>
            <Text style={{color:'grey', fontSize:13}}>
              Connect to navigation app
            </Text>
          </View>
          
          <View style={{ alignItems: "flex-end", width: "20%", padding:6 }}>
          
          <Feather name='navigation' size={24} color="white"/>
          </View>
        </View>
        </TouchableOpacity>
{/*-----------------------------------------------------------Car Mode----------------------------------------------------------*/}       
        
<View style={styles.list}>
          <View style={{ color: "black", width:'80%' }}>
            <Text style={{ color: "white", fontSize:16,fontWeight:'600' }}>
               Car Mode
            </Text>
            <Text style={{color:'grey', fontSize:13}}>
              Turns on your Auto Play
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "20%", padding:5, justifyContent:'center'}}>
          <Switch
              trackColor={{ false: "#767577", true: "orange" }}
              thumbColor={isEnabled ? "black" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
{/*-----------------------------------------------------------Sleep Mode----------------------------------------------------------*/}
<TouchableOpacity onPress={()=>{}}>
<View style={styles.list}>
          <View style={{ color: "black", width:'80%' }}>
            <Text style={{ color: "white", fontSize:16,fontWeight:'600' }}>
               Sleep Mode
            </Text>
            <Text style={{color:'grey', fontSize:13}}>
              Set timer for your music
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "20%", padding:5, justifyContent:'center' }}>
          <Switch
              trackColor={{ false: "#767577", true: "orange" }}
              thumbColor={isEnabled ? "black" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={{paddingRight:7, fontSize:12, color:'white'}}>
              10 mins
            </Text>
          </View>
        </View>
        </TouchableOpacity>
{/*----------------------------------------Help And Support----------------------------------------------------------*/}        
<Text style={{fontSize:18, fontWeight:'bold', color:'white', padding:5}}>
          Help and Supprot
        </Text>
{/*------------------------------------------Customer Care----------------------------------------------------------*/}
<TouchableOpacity onPress={() => props.navigation.navigate('CustomerSupport')}>
        <View style={styles.list}>
          <View style={{ color: "black", width:'80%' }}>
            <Text style={{ color: "white", fontSize:16,fontWeight:'600' }}>
            Customer Care
            </Text>
            <Text style={{color:'grey', fontSize:13}}>
              Contact us
            </Text>
          </View>
          
          <View style={{ alignItems: "flex-end", width: "20%", padding:6 }}>
          
          <AntDesign name="customerservice" size={24} color="white" />
          </View>
        </View>
        </TouchableOpacity>
{/*------------------------------------------Updates------------------------------------------------------------------ */}
        <TouchableOpacity onPress={() => props.navigation.navigate('Updates')}>
        <View style={styles.list}>
          <View style={{ color: "black", width:'80%' }}>
            <Text style={{ color: "white", fontSize:16,fontWeight:'600' }}>
            Updates
            </Text>
            <Text style={{color:'grey', fontSize:13}}>
            Check your updates
            </Text>
          </View>
          
          <View style={{ alignItems: "flex-end", width: "20%", padding:6 }}>
          
          <MaterialIcons name="update" size={28} color="white" />
          </View>
        </View>
        </TouchableOpacity>
        </ScrollView>
{/*---------------------------------------End------------------------------------------------------------- */}
      </View>
      
    );
}

export default Settings

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
    width:'80%'
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
  list:{
    width:'100%',
    borderBottomWidth:2,
    backgroundColor:'#111111',
    height:70,
    paddingLeft:5,
    flexDirection:'row',
    alignItems:'center'

  }
});
