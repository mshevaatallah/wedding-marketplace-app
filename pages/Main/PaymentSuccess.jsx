import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useCallback } from "react";

import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as SplashScreen from "expo-splash-screen";
const PaymentSuccess = ({ navigation }) => {
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
          height: "100%",
        }}
      >
        <Ionicons name="happy-outline" size={50} color={"#949494"} />
        <Text
          style={{
            fontFamily: "JakartaExtraB",
            fontSize: 20,
            color: "#9B9B9B",
            letterSpacing: 1,
            marginTop: 10,
          }}
        >
          Yeay , transaksi mu berhasil !
        </Text>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "#FF4F6F",
            width: 150,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 10,
              color: "white",
              letterSpacing: 1,
            }}
          >
            Balik ke beranda
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({});
