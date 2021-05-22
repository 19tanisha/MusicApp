import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native'
import { Ionicons } from "react-native-vector-icons"; 
const LanguagePref = ({navigation}) => {
    return (
      <View style={styles.conatiner}>
        <View style={styles.header}>
          <View style={{width:'10%'}}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <Text style={{ color: "black", fontSize:22, fontWeight:'bold' }}>
              Set Language
              </Text>
        </View>
        <View style={{width:'10%'}}></View>
        </View>
        <ScrollView style={{width:'100%'}}>
            <View style={styles.lang}>
                <Text style={styles.langtext}>
                    English
                </Text>

            </View>
            <View style={styles.lang}>
                <Text style={styles.langtext}>
                    Hindi
                </Text>

            </View>
            <View style={styles.lang}>
                <Text style={styles.langtext}>
                    Marathi
                </Text>

            </View>
            <View style={styles.lang}>
                <Text style={styles.langtext}>
                    Punjabi
                </Text>

            </View>
            <View style={styles.lang}>
                <Text style={styles.langtext}>
                    Telgu
                </Text>

            </View>
            <View style={styles.lang}>
                <Text style={styles.langtext}>
                    Tamil
                </Text>

            </View>
            <View style={styles.lang}>
                <Text style={styles.langtext}>
                    Malayalam
                </Text>

            </View>
            <View style={styles.lang}>
                <Text style={styles.langtext}>
                    Kannada
                </Text>

            </View>
            <View style={styles.lang}>
                <Text style={styles.langtext}>
                    Gujarati
                </Text>

            </View>
            <View style={styles.lang}>
                <Text style={styles.langtext}>
                    Arabic
                </Text>

            </View>
            <View style={styles.lang}>
                <Text style={styles.langtext}>
                    Arabic
                </Text>

            </View>


        </ScrollView>
      </View>
    );
}

export default LanguagePref

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
  lang:{
      width:'100%',
      height:40,
      backgroundColor:'black',

  },
  langtext:{
      fontSize:18,
      color:'white',
      fontWeight:'600'
  }
});
