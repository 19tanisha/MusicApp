import React, { useState } from "react";
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
import { Audio, Video } from "expo-av";

{
  /*------------------------------------------------------Start Section--------------------------------------------------------------------------------------------------------- */
}
const MusicPlayer = ({ navigation, route }) => {
  // const [sound, setSound] = useState();

  // async function playSound() {
  //   console.log("Loading Sound");
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../assets/minimal.mp3")
  //   );

  //   setSound(sound);

  //   console.log("Playing Sound");
  //   (await sound.playAsync()) && sound.setVolumeAsync(1);
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.pauseAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  // const [status, setStatus] = useState("play");

  // const play_pause = () => {
  //   if (status === "play") {
  //     setStatus("pause"), playSound();
  //   } else {
  //     setStatus("play"), console.log("Unloading Sound");
  //     sound.pauseAsync();
  //   }
  // };
  const [status, setStatus] = useState("pause");
  const play_pause = () => {
    if (status === "pause") {
      setStatus("play");
    } else {
      setStatus("pause");
    }
  };
  const { item } = route.params;
  return (
    <View style={styles.container}>
      {/*------------------------------------------------------ImageBg Section--------------------------------------------------------------------------------------------------------- */}

      <ImageBackground style={styles.imgback} source={item.img} blurRadius={10}>
        {/*------------------------------------------------------Header Section--------------------------------------------------------------------------------------------------------- */}

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
              Playing Now{"  "}
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
            <TouchableOpacity>
              <SimpleLineIcons name="playlist" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/*------------------------------------------------ Section---------------------------------------------------------------------- */}

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
          {/*------------------------------------------------------Start Section--------------------------------------------------------------------------------------------------------- */}

          <View style={styles.songnamesec}>
            <View>
              <Text
                style={{ color: "#faf3f3", fontSize: 25, fontWeight: "bold" }}
              >
                {item.name}
              </Text>
              <Text
                style={{ color: "#faf3f3", fontSize: 15, fontWeight: "bold" }}
              >
                {item.artist}
              </Text>
            </View>
            <Ionicons name="heart" size={29} color="red" />
          </View>
          {/*------------------------------------------------------Slider Section--------------------------------------------------------------------------------------------------------- */}
          <Slider
            style={{
              width: "80%",
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#434b56"
          />
          {/*------------------------------------------------------Timing Section-------------------------------------------- */}
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
        {/*------------------------------------------------------Bottom Section--------------------------------------------------------------------------------------------------------- */}
        <View
          style={{
            height: "20%",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            backgroundColor: "black",
            opacity: 0.8,
          }}
        >
          {/*------------------------------------------------------Shuffle Icon--------------------------------------------------------------------------------------------------------- */}
          <TouchableOpacity>
            <View style={styles.icon}>
              <MaterialIcons name="shuffle" size={24} color="white" />
            </View>
          </TouchableOpacity>
          {/*------------------------------------------------------Playback Icon--------------------------------------------------------------------------------------------------------- */}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: 30,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="play-back" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/*--------------------------------------------------Pause Icon------------------------------------------------------------------------- */}
          <View style={styles.icon}>
            <TouchableOpacity style={styles.playpause} onPress={play_pause}>
              <Ionicons name={status} size={35} color="#434b56" />
            </TouchableOpacity>
          </View>
          {/*---------------------------------------Playforward Icon------------------------------------------------------------------------- */}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 30,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="ios-play-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
          {/*------------------------------------------------Replay Icon------------------------------------------------------------------------- */}
          <View style={styles.icon}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="replay" size={24} color="white" />
            </TouchableOpacity>
          </View>
          {/*-------------------------------------------------End-------------------------------------------------------------------------------------- */}
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
    paddingTop: 40,
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
    elevation: 50,
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
