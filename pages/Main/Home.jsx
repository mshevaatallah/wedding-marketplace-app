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
import Feather from "@expo/vector-icons/Feather";
import * as SplashScreen from "expo-splash-screen";
const Home = ({ navigation }) => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
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

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                paddingVertical: 10,
              }}
            >
              <Pressable
                style={styles.category_box}
                onPress={() => navigation.navigate("Makeup")}
              ></Pressable>
              <View style={styles.category_box}></View>
              <View style={styles.category_box}></View>
              <View style={styles.category_box}></View>
            </View>
          </ScrollView>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontFamily: "JakartaBold",
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              Promo menarik
            </Text>
            <View style={styles.promo_box}></View>
          </View>
          <View style={{ marginTop: 29, marginBottom: 30 }}>
            <Text
              style={{
                fontFamily: "JakartaBold",
                fontSize: 16,
                marginBottom: 20,
              }}
            >
              Ini cocok buat kamu lho!
            </Text>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    marginTop: 0,
                    flexDirection: "row",
                  }}
                >
                  <View style={styles.cocok_box}>
                    <View
                      style={{
                        width: "100%",
                        height: 100,
                        backgroundColor: "white",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                    ></View>
                  </View>
                  <View style={styles.cocok_box}>
                    <View
                      style={{
                        width: "100%",
                        height: 100,
                        backgroundColor: "white",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                    ></View>
                  </View>
                  <View style={styles.cocok_box}>
                    <View
                      style={{
                        width: "100%",
                        height: 100,
                        backgroundColor: "white",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                    ></View>
                  </View>
                  <View style={styles.cocok_box}>
                    <View
                      style={{
                        width: "100%",
                        height: 100,
                        backgroundColor: "white",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                    ></View>
                  </View>
                </View>
              </ScrollView>
            </View>
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
  category_box: {
    width: 130,
    height: 100,
    backgroundColor: "red",
    borderRadius: 10,
    marginRight: 10,
  },
  promo_box: {
    width: "100%",
    height: 150,
    backgroundColor: "red",
    borderRadius: 10,
  },
  cocok_box: {
    width: 150,
    height: 200,
    backgroundColor: "red",
    borderRadius: 10,
    marginRight: 10,
  },
});
