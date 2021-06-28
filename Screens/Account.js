import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { auth, db } from "../Config";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "react-native-vector-icons";

const Account = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userData, setUserData] = useState([]);
  const getUser = async () => {
    await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
          console.log(doc.data());
        }
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const update = async () => {
    await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .update({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
      })
      .then(() => {
        console.log("User Updated!");
        Alert.alert(
          "Profile Updated!",
          "Your profile has been updated successfully."
        );
      });

    props.navigation.goBack();
  };

  const signOutUser = () => {
    auth.signOut().then(() => {
      props.navigation.replace("Login");
    });
  };
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.conatiner}>
      {/*---------------------------------------------------------Header Section-------------------------------------------------------------------------*/}

      <View style={styles.header}>
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Entypo name="menu" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <Text style={{ color: "black", fontSize: 22, fontWeight: "bold" }}>
            Account
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>

      {/*----------------------------------------Screen Content-----------------------------------------------------------------------*/}
      {/*----------------------------------------Profile Photo-------------------------------------------------------------------------*/}
      <View
        style={{ width: 200, height: 200, marginTop: 20, marginBottom: 10 }}
      >
        {image && (
          <ImageBackground
            source={{
              uri: image,
            }}
            style={{ width: 200, height: 200, marginTop: 20, marginBottom: 10 }}
            imageStyle={{ borderRadius: 300 }}
          ></ImageBackground>
        )}
        <FontAwesome
          name="camera"
          size={35}
          color="grey"
          style={{ position: "absolute", top: 155, left: 155 }}
          onPress={pickImage}
        />
      </View>
      {/*----------------------------------------Display name-------------------------------------------------------------------------*/}
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Display Name
            </Text>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="orange"
              style={styles.userinput}
              value={userData ? userData.name || "" : ""}
              onChangeText={(txt) => setUserData({ ...userData, name: txt })}
            />
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "flex-end",
              paddingBottom: 5,
            }}
          >
            <MaterialIcons name="edit" size={30} color="white" />
          </View>
        </View>
        {/*----------------------------------------User Info-----------------------------------------------------------------------------*/}

        {/* <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Username
            </Text>
            <TextInput
              placeholder="tanya19"
              placeholderTextColor="orange"
              style={styles.userinput}
            />
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "flex-end",
              paddingBottom: 5,
            }}
          >
            <MaterialIcons name="edit" size={30} color="white" />
          </View>
        </View> */}
        {/*---------------------------------------Email------------------------------------------------------------------------ */}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Email
            </Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="orange"
              style={styles.userinput}
              value={userData ? userData.email || "" : ""}
              onChangeText={(txt) => setUserData({ ...userData, email: txt })}
            />
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "flex-end",
              paddingBottom: 5,
            }}
          >
            <MaterialIcons name="edit" size={30} color="white" />
          </View>
        </View>
        {/*-------------------------------------Conact no.-----------------------------------------------------------------*/}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Contact no.
            </Text>
            <TextInput
              placeholder="enter your Contact no."
              placeholderTextColor="orange"
              style={styles.userinput}
              value={userData ? userData.phone || "" : ""}
              onChangeText={(txt) => setUserData({ ...userData, phone: txt })}
            />
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "flex-end",
              paddingBottom: 5,
            }}
          >
            <MaterialIcons name="edit" size={30} color="white" />
          </View>
        </View>
        {/*------------------------------------Gender ------------------------------------------------------------------------------------------------*/}
        {/* <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Gender
            </Text>
            <TextInput
              placeholder="Female"
              placeholderTextColor="orange"
              style={styles.userinput}
            />
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "flex-end",
              paddingBottom: 5,
            }}
          >
            <MaterialIcons name="edit" size={30} color="white" />
          </View>
        </View> */}
        {/*---------------------------------SignOut Button Section------------------------------------------------------------------------------------*/}
        <LinearGradient
          colors={["#ff8303", "orange", "orange", "#ff8303"]}
          style={styles.signout}
        >
          <View>
            <TouchableOpacity onPress={update}>
              <Text
                style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
              >
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={["#ff8303", "orange", "orange", "#ff8303"]}
          style={styles.signout}
        >
          <View>
            <TouchableOpacity onPress={signOutUser}>
              <Text
                style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
              >
                SignOut
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        {/*---------------------------------------End-----------------------------------------------------------------------------------------------------*/}
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 60,
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  header: {
    /*flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,*/
    width: "100%",
    height: 60,
    backgroundColor: "#ff8303",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userinput: {
    width: "70%",
    height: 40,
    padding: 8,
    color: "orange",
  },
  userinfo: {
    width: "100%",
    height: 70,
    padding: 7,
    flexDirection: "row",
  },
  signout: {
    backgroundColor: "orange",
    height: 50,
    width: 150,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 40,
    justifyContent: "center",
  },
});
