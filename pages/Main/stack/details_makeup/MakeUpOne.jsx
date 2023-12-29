import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as SplashScreen from "expo-splash-screen";

const MakeUpOne = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../../../assets/fonts/JakartaMedium.ttf"),
    JakartaBold: require("../../../../assets/fonts/Jakarta_Bold.ttf"),
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
    <SafeAreaView onLayout={onLayoutRootView} style={styles.main_container}>
      <StatusBar style="dark" />
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            marginHorizontal: 20,
          }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={35}
            suppressHighlighting={true}
            onPress={() => navigation.goBack()}
          />
          <Ionicons
            name="heart-outline"
            size={35}
            suppressHighlighting={true}
          />
        </View>
        <ScrollView></ScrollView>
      </View>

      <View style={styles.bottom_bar}></View>
    </SafeAreaView>
  );
};

export default MakeUpOne;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  bottom_bar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: "pink",
  },
});
