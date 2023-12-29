import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as SplashScreen from "expo-splash-screen";
const MakeUp = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../../assets/fonts/JakartaMedium.ttf"),
    JakartaBold: require("../../../assets/fonts/Jakarta_Bold.ttf"),
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Ionicons
          name="arrow-back-outline"
          size={35}
          suppressHighlighting={true}
          onPress={() => navigation.goBack()}
        />

        <Text
          style={{
            fontFamily: "JakartaExtraB",
            fontSize: 20,
            marginBottom: 15,
            color: "#24282c",
            letterSpacing: 1,
            marginTop: 10,
          }}
        >
          Make Up Artist
        </Text>
        <Ionicons name="heart-outline" size={35} suppressHighlighting={true} />
      </View>
      <ScrollView style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Pressable onPress={() => navigation.navigate("MakeupOne")}>
            <View style={styles.box_image}></View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 15,
                marginBottom: 5,
                color: "#24282c",
                letterSpacing: 1,
                marginTop: 10,
              }}
            >
              The Beauty Salon
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 8,
                color: "#595A5D",
                letterSpacing: 1,
                maxWidth: 150,
                marginBottom: 10,
              }}
            >
              Banjar Baru, Kalimanatan Selatan
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 10,

                letterSpacing: 0.5,
                maxWidth: 150,
                marginBottom: 5,
              }}
            >
              Mulai Rp.400.000.00
            </Text>
          </Pressable>
          <View>
            <View style={styles.box_image}></View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 15,
                marginBottom: 5,
                color: "#24282c",
                letterSpacing: 1,
                marginTop: 10,
              }}
            >
              The Beauty Salon
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 8,
                color: "#595A5D",
                letterSpacing: 1,
                maxWidth: 150,
                marginBottom: 10,
              }}
            >
              Banjar Baru, Kalimanatan Selatan
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 10,

                letterSpacing: 0.5,
                maxWidth: 150,
                marginBottom: 5,
              }}
            >
              Mulai Rp.400.000.00
            </Text>
          </View>
          <View>
            <View style={styles.box_image}></View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 15,
                marginBottom: 5,
                color: "#24282c",
                letterSpacing: 1,
                marginTop: 10,
              }}
            >
              The Beauty Salon
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 8,
                color: "#595A5D",
                letterSpacing: 1,
                maxWidth: 150,
                marginBottom: 10,
              }}
            >
              Banjar Baru, Kalimanatan Selatan
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 10,

                letterSpacing: 0.5,
                maxWidth: 150,
                marginBottom: 5,
              }}
            >
              Mulai Rp.400.000.00
            </Text>
          </View>
          <View>
            <View style={styles.box_image}></View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 15,
                marginBottom: 5,
                color: "#24282c",
                letterSpacing: 1,
                marginTop: 10,
              }}
            >
              The Beauty Salon
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 8,
                color: "#595A5D",
                letterSpacing: 1,
                maxWidth: 150,
                marginBottom: 10,
              }}
            >
              Banjar Baru, Kalimanatan Selatan
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 10,

                letterSpacing: 0.5,
                maxWidth: 150,
                marginBottom: 5,
              }}
            >
              Mulai Rp.400.000.00
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MakeUp;

const styles = StyleSheet.create({
  main_container: {
    marginHorizontal: 20,
    flex: 1,
  },
  box_image: {
    width: "100%",
    height: 170,
    borderRadius: 10,
    backgroundColor: "#D59C9C",
    marginRight: 15,
    marginTop: 20,
  },
});
