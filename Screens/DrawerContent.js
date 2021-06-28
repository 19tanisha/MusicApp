import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProgressBar, Colors } from "react-native-paper";
import { auth, db } from "../Config";
{
  /*--------------------------------------------Firebase--------------------------------------------------------------- */
}
export function DrawerContent(props) {
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
    const unsubscribe = props.navigation.addListener("focus", () => {
      getUser();
    });
    return unsubscribe;
  }, [props.navigation]);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    /*<LinearGradient
      colors={["#ff8303", "orange", "orange", "#ff8303"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, backgroundColor: "yellow" }}
    >*/
    <View style={{ flex: 1, backgroundColor: "#2D2D2D" }}>
      <DrawerContentScrollView {...props}>
        {/*-------------------------------Drawer Content------------------------------------------------------------------------------------------------- */}
        <View style={styles.drawerContent}>
          {/*-------------------------------User Info------------------------------------------------------------------------------------------------------- */}
          <View style={styles.userinfo}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => props.navigation.navigate("Account")}
            >
              <View style={{ flexDirection: "row" }}>
                <Avatar.Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYGXBks17207cStyw8yIWqeX4R7xKLXgHjw&usqp=CAU",
                  }}
                  size={60}
                />
                <View style={{ marginLeft: 10 }}>
                  <Title style={{ color: "#ff8303" }}>{userData.name}</Title>
                  <Caption style={{ fontSize: 15, color: "grey" }}>
                    {userData.email}
                  </Caption>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/*-------------------------------Drawer Section Content--------------------------------------------------------------------------------------------- */}
          <Drawer.Section style={styles.section}>
            {/*-------------------------------Music Content---------------------------------------------------------------------------------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="musical-notes" color="#ff8303" size={size} />
              )}
              label={() => <Text style={{ color: "#ff8303" }}>Music</Text>}
              activeBackgroundColor="red"
              pressColor="yellow"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            {/*-------------------------------Settings Content------------------------------------------------------------------------------------------------ */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color="#ff8303" size={size} />
              )}
              label={() => <Text style={{ color: "#ff8303" }}>Settings</Text>}
              pressColor="yellow"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
            {/*-------------------------------Storage Content---------------------------------------------------------------------------------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="storage" size={24} color="#ff8303" />
              )}
              label={() => <Text style={{ color: "#ff8303" }}>Storage</Text>}
              pressColor="yellow"
              style={{}}
              onPress={() => {}}
            />
            {/*---------------ProgressBarStarts------------ */}
            <ProgressBar
              progress={0.2}
              color={"orange"}
              style={{ width: "70%", marginLeft: 20 }}
            />
            {/*---------------ProgressBarEnds------------- */}
            <View style={{ flexDirection: "row", width: "100%" }}>
              <Text style={{ color: "grey", marginLeft: 20, fontSize: 12 }}>
                24.9GB
              </Text>
              <Text style={{ color: "grey", marginLeft: 80, fontSize: 12 }}>
                101.8 GB free
              </Text>
            </View>
            {/*------------------------------------Clear Cache-------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="broom"
                  size={24}
                  color="#ff8303"
                />
              )}
              label={() => (
                <Text style={{ color: "#ff8303" }}>Clear Cache</Text>
              )}
              pressColor="yellow"
              style={{}}
              onPress={() => {
                Alert.alert("Cleared cache");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
    /*</LinearGradient>*/
  );
}
export default DrawerContent;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userinfo: {
    flexDirection: "row",
    backgroundColor: "black",
    height: 100,
    width: "100%",
    alignItems: "center",
  },
  section: {
    paddingTop: 220,
  },
  clearcache: {
    backgroundColor: "orange",
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
});
