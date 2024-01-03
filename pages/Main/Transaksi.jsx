import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useCallback } from "react";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

const Transaksi = () => {
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
    <SafeAreaView onLayout={onLayoutRootView}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "JakartaExtraB",
            fontSize: 20,
            color: "#24282c",
            letterSpacing: 1,
          }}
        >
          Riwayat Transaksi
        </Text>
      </View>

      <ScrollView style={styles.main_container}>
        <View style={{ marginBottom: 40 }}>
          <View style={styles.box_transaksi}>
            <View
              style={{
                height: 30,
                width: 100,
                backgroundColor: "#15B227",
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                justifyContent: "center",
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "JakartaExtraB",
                  fontSize: 11,
                  color: "#fff",
                  letterSpacing: 1,
                }}
              >
                BERHASIL
              </Text>
            </View>
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
              </View>
            </View>
          </View>
          <View style={styles.box_transaksi}>
            <View
              style={{
                height: 30,
                width: 100,
                backgroundColor: "#15B227",
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                justifyContent: "center",
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "JakartaExtraB",
                  fontSize: 11,
                  color: "#fff",
                  letterSpacing: 1,
                }}
              >
                BERHASIL
              </Text>
            </View>
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
              </View>
            </View>
          </View>
          <View style={styles.box_transaksi}>
            <View
              style={{
                height: 30,
                width: 100,
                backgroundColor: "#FF4F6F",
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                justifyContent: "center",
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "JakartaExtraB",
                  fontSize: 11,
                  color: "#fff",
                  letterSpacing: 1,
                }}
              >
                DIBATALKAN
              </Text>
            </View>
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
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transaksi;

const styles = StyleSheet.create({
  main_container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
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
  },
});
