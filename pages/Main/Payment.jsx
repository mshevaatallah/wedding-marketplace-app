import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useCallback, useState } from "react";

import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";

const Payment = ({ navigation }) => {
  const [color, setColors] = useState(false);
  const [color2, setColors2] = useState(false);
  const [colo3, setColors3] = useState(false);

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
        marginHorizontal: 20,
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            size={40}
            suppressHighlighting={true}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 20,
              marginLeft: 50,
              color: "#24282c",
              letterSpacing: 1,
            }}
          >
            Metode Pembayaran
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              marginBottom: 30,
              marginTop: 20,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                alignItems: "center",
                paddingVertical: 25,
                paddingHorizontal: 20,
                borderRadius: 15,
                shadowColor: "#D8D8D8",
                shadowOffset: { width: -1, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                borderColor: color ? "#FF4F6F" : "#fff",
                borderWidth: 1,
                marginBottom: 20,
              }}
              onPress={() => {
                setColors(!color);
                setColors2(false);
                setColors3(false);
              }}
            >
              <Ionicons
                name="card-outline"
                size={40}
                suppressHighlighting={true}
                onPress={() => navigation.goBack()}
              />
              <View
                style={{
                  height: 30,
                  width: 1,
                  backgroundColor: "#DDDDDD",
                  marginHorizontal: 20,
                }}
              ></View>
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
                  Kartu Debit
                </Text>
                <Text
                  style={{
                    fontFamily: "JakartaRegular",
                    fontSize: 10,
                    color: "#909090",
                    letterSpacing: 1,
                  }}
                >
                  213232322
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                alignItems: "center",
                paddingVertical: 25,
                paddingHorizontal: 20,
                borderRadius: 15,
                shadowColor: "#D8D8D8",
                shadowOffset: { width: -1, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                borderColor: color2 ? "#FF4F6F" : "#fff",
                borderWidth: 1,
                marginBottom: 20,
              }}
              onPress={() => {
                setColors2(!color);
                setColors(false);
                setColors3(false);
              }}
            >
              <Ionicons
                name="card-outline"
                size={40}
                suppressHighlighting={true}
                onPress={() => navigation.goBack()}
              />
              <View
                style={{
                  height: 30,
                  width: 1,
                  backgroundColor: "#DDDDDD",
                  marginHorizontal: 20,
                }}
              ></View>
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
                  Gopay
                </Text>
                <Text
                  style={{
                    fontFamily: "JakartaRegular",
                    fontSize: 10,
                    color: "#909090",
                    letterSpacing: 1,
                  }}
                >
                  213232322
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                alignItems: "center",
                paddingVertical: 25,
                paddingHorizontal: 20,
                borderRadius: 15,
                shadowColor: "#D8D8D8",
                shadowOffset: { width: -1, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                borderColor: colo3 ? "#FF4F6F" : "#fff",
                borderWidth: 1,
                marginBottom: 20,
              }}
              onPress={() => {
                setColors3(!colo3);
                setColors2(false);
                setColors(false);
              }}
            >
              <Ionicons
                name="card-outline"
                size={40}
                suppressHighlighting={true}
                onPress={() => navigation.goBack()}
              />
              <View
                style={{
                  height: 30,
                  width: 1,
                  backgroundColor: "#DDDDDD",
                  marginHorizontal: 20,
                }}
              ></View>
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
                  OVO
                </Text>
                <Text
                  style={{
                    fontFamily: "JakartaRegular",
                    fontSize: 10,
                    color: "#909090",
                    letterSpacing: 1,
                  }}
                >
                  213232322
                </Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottom_bar}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "JakartaBold",
              fontSize: 15,
              color: "#B9B9B9",
              letterSpacing: 0.5,
            }}
          >
            Total Barang
          </Text>
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 13,
              color: "#24282c",
              letterSpacing: 1,
            }}
          >
            Rp.140.000
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "JakartaBold",
              fontSize: 15,
              color: "#B9B9B9",
              letterSpacing: 0.5,
            }}
          >
            Ongkir
          </Text>
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 13,
              color: "#24282c",
              letterSpacing: 1,
            }}
          >
            Rp.15.000
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            borderTopColor: "#DDDDDD",
            borderTopWidth: 1,

            marginTop: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "JakartaBold",
              fontSize: 15,
              color: "#B9B9B9",
              letterSpacing: 0.5,
            }}
          >
            Total Pembayaran
          </Text>
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 13,
              color: "#24282c",
              letterSpacing: 1,
            }}
          >
            Rp.155.000
          </Text>
        </View>
      </View>
      <Pressable style={styles.button_beli}>
        <Text
          style={{
            fontFamily: "JakartaExtraB",
            fontSize: 15,
            color: "#fff",
            letterSpacing: 1,
          }}
        >
          Bayar
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  button_beli: {
    width: "100%",
    height: 70,
    backgroundColor: "#FF4F6F",
    borderRadius: 20,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
  },
});
