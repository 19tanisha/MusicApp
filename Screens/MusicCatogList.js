import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";
import { Ionicons, SimpleLineIcons } from "react-native-vector-icons";

const MusicCatogList = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View key={item.id}>
        {/*item.list.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MusicPlayer", { item })}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))*/}
      </View>
      <ImageBackground
        source={item.img}
        style={{
          flex: 1,
          height: "100%",
          alignItems: "center",
          opacity: 1,
          justifyContent: "space-between",
        }}
        resizeMode="cover"
        blurRadius={10}
      >
        <View
          style={{
            width: "100%",
            height: 30,
            padding: 20,
            height: "20%",

            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "15%",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Ionicons
                name="arrow-back-circle-sharp"
                size={45}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "70%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
          </View>
          <View
            style={{
              width: "15%",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingLeft: 15,
            }}
          >
            <SimpleLineIcons name="playlist" size={26} color="white" />
          </View>
        </View>
        <View style={styles.songbg}>
          <FlatList
            data={item.list}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("MusicPlayer", { item })}
                  style={styles.list}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      height: "100%",
                      width: "80%",
                      alignItems: "center",
                    }}
                  >
                    {/* Icon */}
                    <View style={{ justifyContent: "center", padding: 10 }}>
                      <Image
                        source={item.img}
                        style={{ height: 50, width: 50 }}
                      />
                    </View>
                    <View style={{ height: "100%", justifyContent: "center" }}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: "700",
                          color: "white",
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        {item.artist}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "20%",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      paddingRight: 15,
                    }}
                  ></View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MusicCatogList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  list: {
    flexDirection: "row",
    height: 70,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(150,150,150,0.2)",
    borderBottomWidth: 0.3,
    borderColor: "black",
    marginVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopColor: "grey",
    borderTopWidth: 1,
  },
  songbg: {
    padding: 10,
    alignItems: "center",
    height: "80%",
    backgroundColor: "transparent",
  },
});
