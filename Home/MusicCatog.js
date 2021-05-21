import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export class MusicCatog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = [
      {
        name: "Rock",
        img: {
            uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        },
        id: "1",
      },
      {
        name: "HipHop",
        img: {
          uri:'https://wallpapercave.com/wp/wp2971096.jpg'
      },
        id: "2",
      },
      {
        name: "Jazz",
        img: {
          uri:'https://i.pinimg.com/736x/00/6f/e7/006fe7f785c991102866b859a4b6be7e.jpg'
      },
        id: "3",
      },
      {
        name: "Classical",
        img: {
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucskHt1xghcl0vXiAGjhkz_tL27pFbmBYgQ&usqp=CAU'
      },
        id: "4",
      },
      {
        name: "Metal",
        img: {
          uri:'data:image/jpeg;base64,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'
      },
        id: "5",
      },
    ];
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
          Categories
        </Text>
        <FlatList
          
          keyExtractor={(item) => item.id}
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <Surface style={styles.surface}>
                <Image
                  style={{ width: 105, height: 105, borderRadius: 10 }}
                  source={item.img}
                />
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "700" }}
                >
                  {item.name}
                </Text>
              </Surface>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: "100%",
    marginBottom:50
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

export default MusicCatog;