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
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 20,

              color: "#24282c",
              letterSpacing: 1,
            }}
          >
            Detail
          </Text>
          <Ionicons name="heart-outline" size={35} />
        </View>
        <ScrollView>
          <View
            style={{
              width: "100%",
              height: 300,
              marginTop: 20,
              backgroundColor: "#E5E5E5",
            }}
          ></View>
          <View style={{ marginHorizontal: 20, marginTop: 25 }}>
            <View>
              <Text
                style={{
                  fontFamily: "JakartaExtraB",
                  fontSize: 10,
                  color: "#FF4F6F",
                  letterSpacing: 1,

                  textDecorationLine: "line-through",
                }}
              >
                Rp.599.000
              </Text>
              <Text
                style={{
                  fontFamily: "JakartaBold",
                  fontSize: 20,
                  color: "#24282c",
                  letterSpacing: 1,
                  lineHeight: 25,
                }}
              >
                Rp.400.000
              </Text>
              <Text
                style={{
                  fontFamily: "JakartaExtraB",
                  fontSize: 21,
                  color: "#24282c",
                  letterSpacing: 0.4,
                  lineHeight: 30,
                  marginTop: 15,
                }}
              >
                Paket Lengkap Make Up Artist By Beauty Salon
              </Text>
              <Text
                style={{
                  fontFamily: "JakartaMedium",
                  fontSize: 12,
                  color: "#808080",
                  letterSpacing: 0.2,
                  lineHeight: 15,
                  marginTop: 10,
                }}
              >
                Merupakan paket make up yang murah dan paling terbaik untuk anda{" "}
              </Text>
              <View
                style={{
                  borderBottomColor: "grey",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  fontFamily: "JakartaExtraB",
                  fontSize: 15,
                  color: "#24282c",
                  letterSpacing: 1,
                  lineHeight: 25,
                  marginTop: 18,
                }}
              >
                Deskripsi Produk
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottom_bar}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            borderColor: "#FF4F6F",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="heart-outline" size={25} color={"#FF4F6F"} />
        </View>

        <View style={styles.button_beli}>
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 16,
              color: "#fff",
            }}
          >
            Beli sekarang
          </Text>
        </View>
      </View>
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
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button_beli: {
    width: "70%",
    height: 50,
    backgroundColor: "#FF4F6F",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
});
