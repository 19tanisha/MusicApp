import React, { Component, useState } from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export default function Trending(props) {
  const [songname, setSongname] = useState([
    {
      name: "Sweet but Psycho",
      img: {
        uri: "https://i.ytimg.com/vi/zd-h01o7LtI/maxresdefault.jpg",
      },
      id: "4",
      artist: "Ava Max",
    },
    {
      name: "Attention",
      img: {
        uri: "data:image/jpeg;base64,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",
      },
      id: "5",
      artist: "Charlie Puth",
    },
    {
      name: "We Dont Talk Anymore",
      img: {
        uri: "https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
      },
      id: "6",
      artist: "Charlie Puth",
    },
    {
      name: "Blank Space",
      img: {
        uri: "https://lh3.googleusercontent.com/mBOJa7zx1cZzdOycV53oMtWdnyT2zxCXCQjf5GwW_baplWe30FhOIMaS1q-MVJOOZd_S_h5-j5L0u1oikh2EEL-vNtbuBGEHnqRDd9cDzB1i3KA5Xxnurh9SwMbulFtrJg=s412",
      },
      id: "7",
      artist: "Taylor Swift",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
          paddingLeft: 5,
        }}
      >
        Trendings
      </Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={songname}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MusicPlayer", { item })}
            >
              <Surface style={styles.surface}>
                <Image
                  style={{ width: 105, height: 105, borderRadius: 10 }}
                  source={item.img}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "600",
                    paddingLeft: 5,
                  }}
                >
                  {item.name}
                </Text>
              </Surface>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: "100%",
    marginBottom: 50,
  },
  surface: {
    width: 120,
    padding: 5,
    backgroundColor: "#2d2d2d",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
