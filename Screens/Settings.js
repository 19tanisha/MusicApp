import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Switch, ScrollView} from 'react-native'
import { Ionicons,MaterialIcons ,Feather, Entypo, FontAwesome5, MaterialCommunityIcons} from "react-native-vector-icons";
import LanguagePref from '../Settings/LanguagePref'
import StreamingQuality from '../Settings/StreamingQuality'
import DownloadQuality from '../Settings/DownloadQuality' 
import Eqalizer from '../Settings/Eqalizer'   

const Settings = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
      <View style={styles.conatiner}>

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
        <ScrollView style={{width:'100%'}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white', padding:5}}>
          Language Settings
        </Text>
        
        <TouchableOpacity
        onPress={() => props.navigation.navigate("LanguagePref")}
      >
        <View style={styles.list}>
          <View style={{ color: "black", width:'90%' }}>
            <Text style={{ color: "black", fontSize:16,fontWeight:'600' }}>Language Preference</Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%" }}>
            <FontAwesome5 name="language" size={28} color="black" />
          </View>
        </View>
      </TouchableOpacity>

        <Text style={{fontSize:18, fontWeight:'bold', color:'white', padding:5}}>
          Music Quality
        </Text>
        <TouchableOpacity onPress={()=> props.navigation.navigate('LanguagePref')}>
        
          <View style={styles.list}>
            <View style={{ color: "black", width:'90%' }}>
          <Text style={{ color: "black", fontSize:16,fontWeight:'600' }}>
            Eqalizer
          </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%" }}>
          <MaterialIcons name="equalizer" size={28} color="black" />
          </View>
        </View>
        
        </TouchableOpacity>
      
        <TouchableOpacity onPress={()=> props.navigation.navigate('LanguagePref')}>
        
          <View style={styles.list}>
            <View style={{ color: "black", width:'90%' }}>
          <Text style={{ color: "black", fontSize:16,fontWeight:'600' }}>
            Download Quality
          </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%" }}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="quality-low" size={28} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name="quality-medium" size={28} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name="quality-high" size={28} color="black" />
            </TouchableOpacity>

          </View>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%" }}>
          <MaterialCommunityIcons name="equalizer-outline" size={28} color="black" />
          </View>
        </View>
        
        </TouchableOpacity>
      
        <TouchableOpacity onPress={()=> props.navigation.navigate('LanguagePref')}>
        
          <View style={styles.list}>
            <View style={{ color: "black", width:'90%' }}>
          <Text style={{ color: "black" }}>
            Streaming Quality
          </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%" }}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="quality-low" size={28} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name="quality-medium" size={28} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
            <MaterialCommunityIcons name="quality-high" size={28} color="black" />
            </TouchableOpacity>

          </View>
          </View>
        </View>
        
        </TouchableOpacity>
        {/*------------------------------Data Usage Section--------------------------------*/}
         {/*------------------------------Data Saver Section--------------------------------*/}
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{color:'white',padding:5, fontWeight:'bold',fontSize:18}}>
              Data Usage
          </Text>
          <Text style={{color:'grey',padding:5, marginTop:3, marginLeft:10}}>
              218.90Mb
          </Text>
        </View>
        
        <View style={styles.list}>
          <View style={{ color: "black", width:'80%' }}>
            <Text style={{ color: "black", fontSize:16,fontWeight:'600' }}>
              Data Saver
            </Text>
            <Text style={{color:'#3e3e3e', fontSize:13}}>
              Sets your music quality to low and disables artist canvaces
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "20%" }}>
          <Switch
              trackColor={{ false: "#767577", true: "orange" }}
              thumbColor={isEnabled ? "black" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={styles.list}>
          <View style={{ color: "black", width:'90%' }}>
            <Text style={{ color: "black", fontSize:16,fontWeight:'600' }}>Data Usage Warning</Text>
          </View>
          <View style={{ alignItems: "flex-end", width: "10%" }}>
          <Switch
              trackColor={{ false: "#767577", true: "orange" }}
              thumbColor={isEnabled ? "yellow" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <Text style={{color:'white',padding:5, fontWeight:'bold',fontSize:18}}>
          Connect to Apps
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Navigation')}>
        <View style={styles.list}>
          <View style={{ color: "black", width:'80%' }}>
            <Text style={{ color: "black", fontSize:16,fontWeight:'600' }}>
            Navigation
            </Text>
            <Text style={{color:'#3e3e3e', fontSize:13}}>
              Connect to navigation app
            </Text>
          </View>
          
          <View style={{ alignItems: "flex-end", width: "20%", padding:5 }}>
          
          <Feather name='navigation' size={24} color="black"/>
          </View>
        </View>
        </TouchableOpacity>
        </ScrollView>
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
    backgroundColor:'grey',
    height:60,
    paddingLeft:5,
    flexDirection:'row',
    alignItems:'center'

  }
});
