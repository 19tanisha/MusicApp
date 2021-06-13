import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from "react-native-vector-icons";
import MyDownloads from "../MyMusic/MyDownloads";
import MyLibrary from "../MyMusic/MyLibrary";
import MyFavs from "../MyMusic/MyFavs";
import { LinearGradient } from "expo-linear-gradient";
const MyMusic = (props) => {
  return (
    <View style={styles.conatiner}>
      {/*-------------------------------------Header Section --------------------------------------------------------------------------------------------*/}
      <View style={styles.header}>
        <View style={styles.mainContainer}>
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            My Music
          </Text>
        </View>
      </View>
      {/*------------------------------------My Downloads ------------------------------------------------------------------------------------------------*/}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyDownloads")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={{ width: "10%", justifyContent: "center" }}>
            <Ionicons name="play-circle-outline" size={35} color="white" />
          </View>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={{ fontWeight: "700", color: "white" }}>
              My Downloads
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "500", color: "orange" }}>
              6 songs
            </Text>
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <AntDesign name="right" size={24} color="white" />
          </View>
        </View>
      </TouchableOpacity>
      {/*-----------------------------------My favorites -------------------------------------------------------------------------------------------------*/}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyFavs")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={{ width: "10%", justifyContent: "center" }}>
            <MaterialIcons name="favorite-outline" size={30} color="white" />
          </View>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={{ fontWeight: "700", color: "white" }}>
              My Favorites
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "500", color: "orange" }}>
              6 songs
            </Text>
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <AntDesign name="right" size={24} color="white" />
          </View>
        </View>
      </TouchableOpacity>
      {/*------------------------------------My Library ---------------------------------------------------------------------------------------------------*/}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyLibrary")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={{ width: "10%", justifyContent: "center" }}>
            <MaterialIcons name="library-music" size={30} color="white" />
          </View>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={{ fontWeight: "700", color: "white" }}>
              My Library
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "500", color: "orange" }}>
              6 songs
            </Text>
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <AntDesign name="right" size={24} color="white" />
          </View>
        </View>
      </TouchableOpacity>
      {/*---------------------------------End Section ----------------------------------------------------------------------------------------------------*/}
    </View>
  );
};

export default MyMusic;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 60,
    backgroundColor: "black",
  },
  mainContainer: {
    alignItems: "center",
    width: "100%",
  },
  header: {
    /*flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,*/
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#ff8303",
  },
  list: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(150,150,150,0.2)",
    padding: 5,
    flexDirection: "row",
    borderBottomColor: "black",
    borderTopColor: "grey",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginVertical: 10,
  },
});
