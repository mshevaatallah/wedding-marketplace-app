import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useCallback, useState } from "react";

import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";

const Profile = () => {
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../assets/fonts/JakartaMedium.ttf"),
    JakartaBold: require("../../assets/fonts/Jakarta_Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "JakartaExtraB",
            fontSize: 20,
            color: "#24282c",
            letterSpacing: 1,
          }}
        >
          Profil
        </Text>
      </View>
      <ScrollView
        style={{
          marginHorizontal: 25,
          marginTop: 40,
        }}
      >
        <View style={styles.box_transaksi}>
          <View style={styles.photo_profil}></View>
          <View>
            <Text
              style={{
                fontFamily: "JakartaBold",
                fontSize: 20,
                color: "#180004",

                marginBottom: 5,
              }}
            >
              Sheva Atallah
            </Text>
            <Text
              style={{
                fontFamily: "JakartaBold",
                fontSize: 14,
                color: "#858585",
                letterSpacing: 0.5,
              }}
            >
              Pelajar
            </Text>
          </View>
        </View>
        <View style={styles.box_ubarprofil}>
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 13,
              maxWidth: 100,
              color: "#FFFFFF",
              letterSpacing: 0.5,
            }}
          >
            Ubah profilmu disini
          </Text>
          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal: 40,
              paddingVertical: 12,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 13,
                color: "#FF4F6F",

                letterSpacing: 0.5,
              }}
            >
              Ubah profil
            </Text>
          </View>
        </View>
        <View style={styles.pusat_bantuan}>
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 13,
              maxWidth: 100,
              color: "#FFFFFF",
              letterSpacing: 0.5,
            }}
          >
            Butuh bantuan ?
          </Text>
          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal: 28,
              paddingVertical: 12,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 13,
                color: "#FF4F6F",

                letterSpacing: 0.5,
              }}
            >
              Pusat bantuan
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 40,
          }}
        >
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 20,
              color: "#24282c",
              letterSpacing: 1,
              marginBottom: 20,
            }}
          >
            Profil Detail
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 14,
                color: "#979797",
                letterSpacing: 1,
              }}
            >
              Nama
            </Text>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 14,
                color: "#FF4F6F",
                letterSpacing: 1,
              }}
            >
              Sheva
            </Text>
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 14,
                color: "#979797",
                letterSpacing: 1,
              }}
            >
              Email
            </Text>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 14,
                color: "#FF4F6F",
                letterSpacing: 1,
              }}
            >
              msheva@gmail.com
            </Text>
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 14,
                color: "#979797",
                letterSpacing: 1,
              }}
            >
              No. Handphone
            </Text>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 14,
                color: "#FF4F6F",
                letterSpacing: 1,
              }}
            >
              019212912182
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  box_transaksi: {
    width: "100%",
    height: 130,
    backgroundColor: "#FEE4E9",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  box_ubarprofil: {
    width: "100%",
    height: 90,
    backgroundColor: "#FF4F6F",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  pusat_bantuan: {
    width: "100%",
    height: 90,
    backgroundColor: "#FB002E",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  photo_profil: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#fff",
    marginLeft: 40,
    marginRight: 20,
  },
});
