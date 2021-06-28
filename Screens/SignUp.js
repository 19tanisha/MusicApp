import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  CheckBox,
  ToastAndroid,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";
import { auth, db } from "../Config";
import { ScrollView } from "react-native";
const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  {
    /*-------------------------------------------To create a new account-------------------------------------------------------- */
  }
  const register = () => {
    isSelected
      ? auth
          .createUserWithEmailAndPassword(email, password)
          .then((authUser) => {
            authUser.user.updateProfile({
              displayName: username,
              // photoURL:
              //   imageUrl ||
              //   "https://fgcucdn.fgcu.edu/_resources/images/faculty-staff-male-avatar-200x200.jpg",
            });

            db.collection("users").doc(auth.currentUser.uid).set({
              name: username,
              email: email,
              imgUrl: " ",
              phone: "",
            });
            props.navigation.navigate("HomeScreen");
          })
          .catch((error) => alert(error))
      : ToastAndroid.show("Check Terms & Conditions", 3000);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://t4.ftcdn.net/jpg/02/82/31/75/240_F_282317522_WOxb2pk2ZXCv44fh7GnlrInr0T2TS4ao.jpg",
        }}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholderTextColor="black"
          style={styles.inp}
          placeholder="Username:"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholderTextColor="black"
          style={styles.inp}
          placeholder="Email:"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholderTextColor="black"
          style={styles.inp}
          placeholder="Password:"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            borderColor={"white"}
          />
          <Text style={styles.label}>Terms and Conditions</Text>
        </View>
        {/* <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */}
        <LinearGradient
          style={styles.button}
          colors={["#ff8303", "#ff8303", "orange", "orange"]}
        >
          <TouchableOpacity onPress={register}>
            <View
              style={{
                height: 50,
                width: 150,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.text}>SignUp</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "orange" }}>
              {" "}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bdd2b6",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inp: {
    height: 40,
    width: 300,
    backgroundColor: "#ff8303",
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },

  text: {
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "black",
  },
  button: {
    backgroundColor: "#ff8303",
    borderRadius: 15,
    height: 40,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginVertical: 15,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    color: "white",
    fontSize: 15,
  },
});
