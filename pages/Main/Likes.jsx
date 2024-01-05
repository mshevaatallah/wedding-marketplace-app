import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useCallback } from "react";

import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";
const Likes = ({ navigation }) => {
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
        flex: 1,
      }}
    >
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <Ionicons
          name="chevron-back-outline"
          size={40}
          suppressHighlighting={true}
          onPress={() => navigation.goBack()}
        />
        <ScrollView>
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 30,
              marginBottom: 15,
              color: "#24282c",
              letterSpacing: 1,
              marginTop: 30,
            }}
          >
            Yang kamu suka
          </Text>
          <View style={{ marginBottom: 30 }}>
            <View style={styles.box_transaksi}>
              <View
                style={{
                  paddingHorizontal: 15,
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: "JakartaExtraB",
                      fontSize: 15,
                      color: "#24282c",
                      letterSpacing: 1,
                      marginBottom: 5,
                    }}
                  >
                    Atlanta Beauty
                  </Text>
                  <Text
                    style={{
                      fontFamily: "JakartaMedium",
                      fontSize: 13,
                      color: "#595A5D",
                      letterSpacing: 1,
                      marginBottom: 10,
                    }}
                  >
                    1 Set alat make up
                  </Text>
                  <Text
                    style={{
                      fontFamily: "JakartaMedium",
                      fontSize: 13,
                      color: "#595A5D",
                      letterSpacing: 1,
                    }}
                  >
                    24 Okt, 13:15 WIB
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: "JakartaExtraB",
                      fontSize: 12,
                      color: "#24282c",
                      letterSpacing: 1,
                      marginBottom: 5,
                    }}
                  >
                    Rp. 1.000.000
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#F0F0F0",
                      paddingVertical: 10,
                      paddingHorizontal: 14,
                      borderRadius: 12,
                      marginTop: 10,
                    }}
                  >
                    <Ionicons
                      name="trash-outline"
                      size={20}
                      suppressHighlighting={true}
                      onPress={() => navigation.goBack()}
                    />
                    <Text
                      style={{
                        fontFamily: "JakartaMedium",
                        fontSize: 15,
                        color: "#24282c",
                        letterSpacing: 1,
                      }}
                    >
                      1
                    </Text>
                    <Ionicons
                      name="add-outline"
                      size={23}
                      suppressHighlighting={true}
                      onPress={() => navigation.goBack()}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottom_bar}>
        <Pressable
          style={styles.button_beli}
          onPress={() => navigation.navigate("AlamatInput")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Ionicons
              name="card-outline"
              size={25}
              color={"white"}
              suppressHighlighting={true}
            />
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 16,
                color: "#fff",
                marginLeft: 10,
              }}
            >
              Bayar sekarang
            </Text>
          </View>

          <Text
            style={{
              fontFamily: "JakartaMedium",
              fontSize: 14,
              color: "#fff",
            }}
          >
            Rp.1.000.000
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Likes;

const styles = StyleSheet.create({
  box_transaksi: {
    width: "100%",
    paddingBottom: 30,
    backgroundColor: "#FDF9F9",
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginTop: 20,
    borderRadius: 15,
    paddingTop: 20,
  },
  bottom_bar: {
    position: "absolute",
    bottom: 20,
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
    width: "100%",
    height: 70,
    backgroundColor: "#FF4F6F",
    borderRadius: 20,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
});
