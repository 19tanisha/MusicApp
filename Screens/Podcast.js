import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import PodcastCaraousel from "../CustomList.js/PodcastCaraousel";
import { LinearGradient } from "expo-linear-gradient";
import PopularRadioList from "../CustomList.js/PopularRadioList";
import MotivationList from "../CustomList.js/MotivationList";
const Podcast = (props) => {
  return (
    <LinearGradient
      style={styles.conatiner}
      colors={["#e1701a", "#ff8303", "#ff8303", "orange", "orange"]}
    >
      <Text style={{ fontSize: 35, color: "black", fontWeight: "bold" }}>
        Podcast
      </Text>
      {/*-------------------------------------Content--------------------------------------------------------------------------------------------------------------------- */}
      <PodcastCaraousel />
      <PopularRadioList navigation={props.navigation} />
      <MotivationList navigation={props.navigation} />
    </LinearGradient>
  );
};

export default Podcast;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    /*flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,*/
    width: "100%",
    height: 50,
    backgroundColor: "#ff8303",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
