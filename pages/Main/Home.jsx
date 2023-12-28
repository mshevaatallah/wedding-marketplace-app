import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import * as SplashScreen from "expo-splash-screen";
const Home = () => {
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
    <SafeAreaView onLayout={onLayoutRootView} style={styles.main_container}>
      <StatusBar style="dark" />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",

            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 28,
                marginBottom: 15,
                color: "#24282c",
                letterSpacing: 1,
              }}
            >
              Hello Shev
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 13,
                color: "#595A5D",
                letterSpacing: 1,
              }}
            >
              Selamat datang di WeddingKlik !
            </Text>
          </View>
          <View>
            <Feather name="shopping-bag" size={28} color="#24282c" />
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "JakartaBold",
                fontSize: 20,
              }}
            >
              Kategori
            </Text>
            <Ionicons name="ellipsis-horizontal-outline" size={25} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main_container: {
    marginHorizontal: 20,
    flex: 1,
  },
});
