import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import {
  Ionicons,
  Feather,
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import Slider from "@react-native-community/slider";
const MusicPlayer = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgback} source={item.img} blurRadius={10}>
        <View style={styles.header}>
          <View
            style={{ width: "20%", height: "100%", justifyContent: "center" }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={29} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "60%",
              flexDirection: "row",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>
              Playing Now{" "}
            </Text>
            <Feather name="volume-2" size={24} color="white" />
          </View>
          <View
            style={{
              width: "20%",
              height: "100%",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingRight: 15,
            }}
          >
            <SimpleLineIcons name="playlist" size={24} color="white" />
          </View>
        </View>

        <View style={{ height: "70%", width: "100%", alignItems: "center" }}>
          <View style={styles.imgbackview}>
            <Image
              source={item.img}
              style={{
                width: 300,
                borderRadius: 20,
                height: 300,
                alignItems: "center",
              }}
            />
          </View>

          <View style={styles.songnamesec}>
            <View>
              <Text
                style={{ color: "black", fontSize: 24, fontWeight: "bold" }}
              >
                {item.name}
              </Text>
              <Text
                style={{ color: "black", fontSize: 18, fontWeight: "bold" }}
              >
                {item.artist}
              </Text>
            </View>
            <Ionicons name="heart" size={29} color="white" />
          </View>
          <Slider
            style={{ width: "80%", height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <View
            style={{
              width: "80%",
              height: 10,
              marginTop: 5,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.time}>0:00</Text>
            <Text style={styles.time}>3:18</Text>
          </View>
        </View>

        <View
          style={{
            height: "20%",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
            backgroundColor: "black",
          }}
        >
          <TouchableOpacity>
            <View style={styles.icon}>
              <MaterialIcons name="shuffle" size={24} color="white" />
            </View>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: 20,
            }}
          >
            <Ionicons name="play-back" size={24} color="white" />
          </View>

          <View style={styles.icon}>
            <TouchableOpacity style={styles.playpause}>
              <Ionicons name="pause" size={35} color="#434b56" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 20,
            }}
          >
            <Ionicons name="ios-play-forward" size={24} color="white" />
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="replay" size={24} color="white" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  header: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imgback: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  imgbackview: {
    height: 305,
    width: 305,
    borderRadius: 20,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  songnamesec: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    paddingHorizontal: 20,
    marginTop: 30,
    justifyContent: "space-between",
  },
  time: {
    color: "white",
    fontSize: 15,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playpause: {
    height: 70,
    width: 70,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
