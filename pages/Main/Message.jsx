import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useCallback } from "react";

import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as SplashScreen from "expo-splash-screen";
const Message = () => {
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
        <Ionicons name="sad-outline" size={50} color={"#949494"} />
        <Text
          style={{
            fontFamily: "JakartaExtraB",
            fontSize: 20,
            color: "#9B9B9B",
            letterSpacing: 1,
            marginTop: 10,
          }}
        >
          Yah belum ada notifikasi nih :(
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({});
