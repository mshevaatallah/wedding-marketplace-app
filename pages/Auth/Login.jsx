import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const Login = () => {
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../assets/fonts/JakartaRegular.ttf"),
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
    <SafeAreaView style={styles.main_container} onLayout={onLayoutRootView}>
      <Text> Back </Text>
      <View>
        <Text style={{ fontFamily: "JakartaRegular" }}> Mari kita mulai </Text>
        <View style={styles.number_container}>
          <View style={styles.region_code}></View>
          <View style={styles.number_code}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main_container: {
    marginHorizontal: 20,
  },
  number_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  region_code: {
    width: "30%",
    height: 50,
    backgroundColor: "red",
  },
  number_code: {
    width: "65%",
    height: 50,
    backgroundColor: "blue",
  },
});
