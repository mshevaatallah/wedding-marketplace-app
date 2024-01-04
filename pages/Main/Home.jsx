import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import Banner from "../../assets/images/7743860.jpg";
import MakeupImage from "../../assets/images/bunch-cosmetics-beauty-vlogger.jpg";
import BusanaImage from "../../assets/images/busana.jpeg";
import MediaImage from "../../assets/images/media.jpeg";
import VendorImage from "../../assets/images/vendor.jpeg";
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
            <Ionicons
              name="heart-outline"
              size={35}
              color="#24282c"
              suppressHighlighting={true}
              onPress={() => navigation.navigate("Likes")}
            />
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
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                paddingVertical: 10,
              }}
            >
              <View>
                <ImageBackground
                  source={MakeupImage}
                  style={styles.category_box}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Pressable onPress={() => navigation.navigate("Makeup")}>
                    <View style={styles.Badge_style}>
                      <Text
                        style={{
                          fontFamily: "JakartaBold",
                          fontSize: 12,
                          color: "white",
                        }}
                      >
                        Make Up
                      </Text>
                    </View>
                  </Pressable>
                </ImageBackground>
              </View>

              <View>
                <ImageBackground
                  source={BusanaImage}
                  style={styles.category_box}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Pressable onPress={() => navigation.navigate("Makeup")}>
                    <View style={styles.Badge_style}>
                      <Text
                        style={{
                          fontFamily: "JakartaBold",
                          fontSize: 12,
                          color: "white",
                        }}
                      >
                        Busana
                      </Text>
                    </View>
                  </Pressable>
                </ImageBackground>
              </View>
              <View>
                <ImageBackground
                  source={MediaImage}
                  style={styles.category_box}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Pressable onPress={() => navigation.navigate("Makeup")}>
                    <View style={styles.Badge_style}>
                      <Text
                        style={{
                          fontFamily: "JakartaBold",
                          fontSize: 12,
                          color: "white",
                        }}
                      >
                        Media
                      </Text>
                    </View>
                  </Pressable>
                </ImageBackground>
              </View>
              <View>
                <ImageBackground
                  source={VendorImage}
                  style={styles.category_box}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Pressable onPress={() => navigation.navigate("Makeup")}>
                    <View style={styles.Badge_style}>
                      <Text
                        style={{
                          fontFamily: "JakartaBold",
                          fontSize: 12,
                          color: "white",
                        }}
                      >
                        Vendor
                      </Text>
                    </View>
                  </Pressable>
                </ImageBackground>
              </View>
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
            <View style={styles.promo_box}>
              <Image
                source={Banner}
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                }}
              />
            </View>
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

  Image_style: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
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
  Badge_style: {
    top: 40,
    left: 0,
    backgroundColor: "#FF4F6F",
    position: "absolute",
    height: 30,
    width: 80,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
