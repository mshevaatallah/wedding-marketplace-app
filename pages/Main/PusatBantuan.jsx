import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useCallback } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

const PusatBantuan = ({ navigation }) => {
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
    <SafeAreaView
      onLayout={onLayoutRootView}
      style={{
        marginHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",

          paddingBottom: 20,
        }}
      >
        <Ionicons
          name="chevron-back-outline"
          size={35}
          suppressHighlighting={true}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontFamily: "JakartaExtraB",
            fontSize: 20,
            color: "#24282c",
            letterSpacing: 1,
            marginLeft: 20,
          }}
        >
          Pusat Bantuan
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 12,
            backgroundColor: "#fff",
            shadowOffset: { width: -1, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          }}
        >
          <Ionicons
            name="mail-open-outline"
            size={40}
            suppressHighlighting={true}
            color={"#FF4F6F"}
          />

          <View
            style={{
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 14,
                color: "#24282c",
                letterSpacing: 1,
              }}
            >
              Email
            </Text>
            <Text
              style={{
                fontFamily: "JakartaRegular",
                fontSize: 13,
                color: "#24282c",
                letterSpacing: 1,
                marginTop: 3,
              }}
            >
              weddingklik.help@gmail.com
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 12,
            backgroundColor: "#fff",
            shadowOffset: { width: -1, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            marginTop: 20,
          }}
        >
          <Ionicons
            name="chatbubbles-outline"
            size={40}
            suppressHighlighting={true}
            color={"#FF4F6F"}
          />

          <View
            style={{
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 14,
                color: "#24282c",
                letterSpacing: 1,
              }}
            >
              Telepon
            </Text>
            <Text
              style={{
                fontFamily: "JakartaRegular",
                fontSize: 13,
                color: "#24282c",
                letterSpacing: 1,
                marginTop: 3,
              }}
            >
              0082199212
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PusatBantuan;

const styles = StyleSheet.create({});
