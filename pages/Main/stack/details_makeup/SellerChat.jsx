import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useCallback } from "react";

import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as SplashScreen from "expo-splash-screen";

const SellerChat = ({ navigation }) => {
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
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#D5D5D5",
          paddingBottom: 20,
        }}
      >
        <Ionicons
          name="chevron-back-outline"
          size={40}
          suppressHighlighting={true}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 20,
              backgroundColor: "#ebebeb",
              marginRight: 15,
            }}
          ></View>
          <View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 14,
                color: "#24282c",
                letterSpacing: 0.5,
                marginBottom: 3,
              }}
            >
              Ameera Store
            </Text>
            <Text
              style={{
                fontFamily: "JakartaRegular",
                fontSize: 12,
                color: "#24282c",
                letterSpacing: 0.5,
              }}
            >
              Online
            </Text>
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={"position"}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <View style={styles.bottom_input}>
          <TextInput
            style={{
              paddingLeft: 10,
              borderRadius: 20,
              backgroundColor: "#F8F8F8",
              height: 65,
              fontFamily: "JakartaExtraB",
              fontSize: 12,
              marginTop: 15,
              paddingLeft: 20,
              width: "80%",
            }}
          ></TextInput>
          <View
            style={{
              height: 65,
              width: 65,
              backgroundColor: "white",
              borderColor: "#FF4F6F",
              borderWidth: 2,
              marginTop: 15,
              borderRadius: 20,
              justifyContent: "center",
              marginLeft: 10,
              alignItems: "center",
            }}
          >
            <Ionicons name="send-outline" size={30} color="#FF4F6F" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SellerChat;

const styles = StyleSheet.create({
  bottom_input: {
    width: "100%",
    paddingBottom: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
