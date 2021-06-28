import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const BottomSheet = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginVertical: 5 }}>
          <TouchableOpacity>
            <Text style={styles.text}>Add To Playlist</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Send Song</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Set as Ringtone</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Set Sleep timer</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Sound Effect</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>View Details</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Delete Songs</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            borderTopWidth: 1,
            borderTopColor: "black",
            width: "100%",
          }}
        >
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
