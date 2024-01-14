import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import cocok1 from "../../../assets/images/cocok5.jpeg";
import cocok2 from "../../../assets/images/cocok6.jpeg";
import cocok3 from "../../../assets/images/cocok7.jpeg";
import cocok4 from "../../../assets/images/cocok8.jpeg";
import * as SplashScreen from "expo-splash-screen";
const Busana = ({ navigation }) => {
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
          marginBottom: 20,
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
            marginBottom: 15,
            color: "#24282c",
            letterSpacing: 1,
            marginTop: 10,
          }}
        >
          Busana
        </Text>
        <Ionicons
          name="heart-outline"
          size={35}
          suppressHighlighting={true}
          onPress={() => navigation.navigate("Likes")}
        />
      </View>
      <ScrollView style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("BusanaOne")}
            style={styles.View_container}
          >
            <View style={styles.box_image}>
              <Image
                source={cocok1}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                }}
              />
            </View>
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
              Noor Dress
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
              Kelapa Gading , Jakarta Utara
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 12,

                letterSpacing: 0.5,
                maxWidth: 150,
                marginBottom: 5,
              }}
            >
              Mulai Rp.1.250.000
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("MakeupTwo")}
            style={styles.View_container}
          >
            <View style={styles.box_image}>
              <Image
                source={cocok2}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                }}
              />
            </View>
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
              Yamigamoi Beauty
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
              Pondok Indah , Jakarta Selatan
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 12,

                letterSpacing: 0.5,
                maxWidth: 150,
                marginBottom: 5,
              }}
            >
              Mulai Rp.1.000.000
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("MakeupThree")}
            style={styles.View_container}
          >
            <View style={styles.box_image}>
              <Image
                source={cocok3}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                }}
              />
            </View>
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
              Leican Artist
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
              Priok , Jakarta Utara
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 12,

                letterSpacing: 0.5,
                maxWidth: 150,
                marginBottom: 5,
              }}
            >
              Mulai Rp.900.000
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("MakeupFour")}
            style={styles.View_container}
          >
            <View style={styles.box_image}>
              <Image
                source={cocok4}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                }}
              />
            </View>
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
              Ameeera Beauty
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
              Clincing, Jakarta Utara
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 12,

                letterSpacing: 0.5,
                maxWidth: 150,
                marginBottom: 5,
              }}
            >
              Mulai Rp.400.000
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Busana;

const styles = StyleSheet.create({
  main_container: {
    marginHorizontal: 20,
    flex: 1,
  },
  box_image: {
    width: 150,
    height: 170,
    borderRadius: 10,
    backgroundColor: "#D59C9C",
  },
  View_container: {
    marginBottom: 40,
  },
});
