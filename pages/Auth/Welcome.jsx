import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ImageBackground,
} from "react-native";

import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import bg_image from "../../assets/images/wedding_bg.jpg";

import * as SplashScreen from "expo-splash-screen";
const Welcome = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../assets/fonts/JakartaMedium.ttf"),
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
      <StatusBar style="dark" />
      <View style={styles.image_container}>
        <ImageBackground
          source={bg_image}
          resizeMode="cover"
          imageStyle={{ borderEndStartRadius: 30, borderBottomEndRadius: 30 }}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        ></ImageBackground>
      </View>
      <View style={{ marginHorizontal: 20, flex: 1, marginTop: 25 }}>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <View style={styles.button_style}>
            <Text style={{ fontFamily: "JakartaExtraB", color: "#FF4F6F" }}>
              Masuk
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("RegisterAccount")}>
          <View style={styles.button_style2}>
            <Text style={{ fontFamily: "JakartaExtraB", color: "white" }}>
              Mulai
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  image_container: {
    width: "100%",
    height: "85%",
    borderEndStartRadius: 30,
    borderBottomEndRadius: 30,

    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  button_style: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF",
    borderColor: "#FF4F6F",
    borderWidth: 2,

    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  button_style2: {
    width: "100%",
    height: 60,
    backgroundColor: "#FF4F6F",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});
