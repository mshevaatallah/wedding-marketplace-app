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
import cocok1 from "../../assets/images/cocok1.jpeg";
import cocok2 from "../../assets/images/cocok2.jpeg";
import cocok3 from "../../assets/images/cocok3.jpeg";
import cocok4 from "../../assets/images/cocok4.jpeg";
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
                marginBottom: 12,
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
              <Pressable onPress={() => navigation.navigate("Makeup")}>
                <ImageBackground
                  source={MakeupImage}
                  style={styles.category_box}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <View>
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
                  </View>
                </ImageBackground>
              </Pressable>

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
                    marginBottom: 20,
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
                    >
                      <Image
                        source={cocok1}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      />
                      <View
                        style={{
                          marginLeft: 13,
                          marginRight: 5,
                          marginTop: 10,
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "JakartaBold",
                            fontSize: 15,
                            color: "#595A5D",
                            maxWidth: 150,
                          }}
                        >
                          Paket alis dan bulu mata
                        </Text>
                        <Text
                          style={{
                            fontFamily: "JakartaMedium",
                            fontSize: 12,
                            color: "#595A5D",
                            marginTop: 15,
                          }}
                        >
                          By Ameera Beauty
                        </Text>
                      </View>
                    </View>
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
                    >
                      <Image
                        source={cocok2}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      />
                      <View
                        style={{
                          marginLeft: 13,
                          marginRight: 5,
                          marginTop: 10,
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "JakartaBold",
                            fontSize: 15,
                            color: "#595A5D",
                            maxWidth: 150,
                          }}
                        >
                          Paket Make Up hemat
                        </Text>
                        <Text
                          style={{
                            fontFamily: "JakartaMedium",
                            fontSize: 12,
                            color: "#595A5D",
                            marginTop: 15,
                          }}
                        >
                          By Ameera Beauty
                        </Text>
                      </View>
                    </View>
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
                    >
                      <Image
                        source={cocok4}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        marginLeft: 13,
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "JakartaBold",
                          fontSize: 15,
                          color: "#595A5D",
                          maxWidth: 150,
                        }}
                      >
                        Paket Make Up lengkap
                      </Text>
                      <Text
                        style={{
                          fontFamily: "JakartaMedium",
                          fontSize: 12,
                          color: "#595A5D",
                          marginTop: 15,
                        }}
                      >
                        By Ameera Beauty
                      </Text>
                    </View>
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
                    >
                      <Image
                        source={cocok3}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      />
                      <View
                        style={{
                          marginLeft: 13,
                          marginRight: 5,
                          marginTop: 10,
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "JakartaBold",
                            fontSize: 15,
                            color: "#595A5D",
                            maxWidth: 150,
                          }}
                        >
                          Miss Swiss Make Up
                        </Text>
                        <Text
                          style={{
                            fontFamily: "JakartaMedium",
                            fontSize: 12,
                            color: "#595A5D",
                            marginTop: 15,
                          }}
                        >
                          By Ameera Beauty
                        </Text>
                      </View>
                    </View>
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
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
