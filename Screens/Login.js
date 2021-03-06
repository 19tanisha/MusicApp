import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import { auth } from "../Config";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  {
    /*------------------------------------When user is already logged in------------------------------------------------------- */
  }
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        props.navigation.replace("HomeScreen"),
          setLoading(false),
          console.log("User Present ==>", authUser);
      } else {
        console.log("No user");
      }
    });
    return unsub;
  }, []);
  {
    /*--------------------------------------------------To login------------------------------------------------------- */
  }
  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        props.navigation.navigate("HomeScreen");
      })
      .catch((error) => alert(error));
  };
  {
    /*---------------------------------------------------------------------------------------------------------------------- */
  }
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
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
          style={styles.email}
          placeholder="Email:"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          placeholder="Password:"
          placeholderTextColor="black"
          style={styles.pass}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <LinearGradient
          style={styles.button}
          colors={["#ff8303", "#ff8303", "orange", "orange"]}
        >
          <TouchableOpacity onPress={login}>
            <View
              style={{
                height: 50,
                width: 150,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.text}>Login</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>

        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            Dont have an account?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#ff8303" }}
            >
              {" "}
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  email: {
    height: 40,
    width: 300,
    backgroundColor: "#ff8303",
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 100,
  },
  pass: {
    height: 40,
    width: 300,
    backgroundColor: "#ff8303",
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },

  text: {
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ff8303",
    borderRadius: 15,
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
});
