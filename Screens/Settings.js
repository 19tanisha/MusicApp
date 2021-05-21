import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { Ionicons,MaterialIcons , Entypo, FontAwesome5, MaterialCommunityIcons} from "react-native-vector-icons";
import LanguagePref from '../Settings/LanguagePref'
import StreamingQuality from '../Settings/StreamingQuality'
import DownloadQuality from '../Settings/DownloadQuality' 
import Eqalizer from '../Settings/Eqalizer'   
const Settings = (props) => {
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

        <Text style={{fontSize:18, fontWeight:'bold', color:'white', padding:5}}>
          Language Settings
        </Text>
        <TouchableOpacity
        onPress={() => props.navigation.navigate("LanguagePref")}
      >
        <View style={styles.list}>
          <View style={{ color: "black", width:'90%' }}>
            <Text style={{ color: "black" }}>Language Preference</Text>
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
          <Text style={{ color: "black" }}>
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
          <Text style={{ color: "black" }}>
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
    height:50,
    padding:10,
    flexDirection:'row'

  }
});
