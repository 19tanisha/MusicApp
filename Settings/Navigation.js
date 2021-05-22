import React, {useState} from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View,Switch,Image } from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";


const Navigation = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style={styles.container}>
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
          <Text style={styles.headertext}>Connect To Apps</Text>
        </View>

        <View style={{ width: "10%" }}></View>
      </View>
{/*-----------------------------------Navigation Header---------------------------------- */}
        <View style={{width:'100%', alignItems:'center', marginTop:20}}>
            <Text style={styles.heading}>
                Navigation
            </Text>
            <Text style={{fontSize:15, color:'orange', textAlign:'center',marginTop:20}}>
                BE SAFE, DO NOT TOGGEL WITH THE NAVIGATION APP PROPMTS BELOW WHILE DRIVING A MOTOR VEHICLE
            </Text>
            <View style={{width:'100%',flexDirection:'row', marginTop:20}}>
                <View style={{width:'80%', paddingLeft:10}}>
                    <Text style={{color:'white'}}>
                        Get a reminder to use navigation apps when you're in your car
                    </Text>
                </View>
                <View style={{width:'20%', alignItems:'flex-end'}}>
                <Switch
                    trackColor={{ false: "#767577", true: "white" }}
                    thumbColor={isEnabled ? "orange" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
            />
                </View>
            </View>
        </View>
        {/*google maps */}

        <View style={styles.googlemaps}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJnKemQyAraiKCNL--q-YpECw5xJuC1q07A&usqp=CAU'}}
            style={styles.googleimg}/>
            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>
                Google maps
            </Text>

          </View>
          <Text style={{color:'white', textAlign:'center', fontSize:16,marginTop:5}}>
              Play music and Podcasts in Google Maps.
          </Text>
          <View style={{width:'100%', alignItems:'center'}}>
          <View style={styles.connect}>
              <TouchableOpacity>
                  <Text>
                      Connect
                  </Text>
              </TouchableOpacity>
          </View>
        </View>
        </View>
        {/*wazes */}
        <View style={styles.googlemaps}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={{uri:'https://e7.pngegg.com/pngimages/151/943/png-clipart-waze-gps-navigation-systems-computer-icons-mobile-app-icon-for-google-maps-smiley-gps-navigation-systems-thumbnail.png'}}
            style={styles.googleimg}/>
            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>
                Waze
            </Text>

          </View>
          <Text style={{color:'white', textAlign:'center', fontSize:16,marginTop:5}}>
             Control your music while navigating
          </Text>
          <View style={{width:'100%', alignItems:'center'}}>
          <View style={styles.connect}>
              <TouchableOpacity>
                  <Text>
                      Get the App
                  </Text>
              </TouchableOpacity>
          </View>
        </View>
        </View>
        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop:60,
        alignItems:'center'
      },
      header: {
        backgroundColor: "orange",
        width: "100%",
        height: 60,
        flexDirection: "row",
      },
      headertext: {
        fontSize: 22,
        fontWeight: "bold",
      },
      heading:{
          fontSize:20,
          fontWeight:'600',
          color:'white',

      },
      googlemaps:{
          height:150,
          width:'95%',
          backgroundColor:'#172026',
          marginTop:10,
          borderRadius:10,
          
      },
      googleimg:{
          width:50,
          height:50,
          borderRadius:10,
          margin:5
      },
      connect:{
          backgroundColor:'#172026',
          borderColor:'white',
          borderWidth:1,
          height:40,
          width:100,
          justifyContent:'center',
          alignItems:'center',
          marginTop:10,
          borderRadius:10
      }
})
