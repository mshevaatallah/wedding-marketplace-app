import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

const AlamatInput = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../assets/fonts/JakartaMedium.ttf"),
  });
  const [color, setColors] = useState(false);
  const [color2, setColors2] = useState(false);
  const [color3, setColors3] = useState(false);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const handlePress = () => {
    navigation.navigate("Payment");
  };
  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.main_container}>
      <StatusBar style="dark" />
      <Ionicons
        name="chevron-back-outline"
        size={35}
        suppressHighlighting={true}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
          <View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 30,
                marginTop: 15,
              }}
            >
              Alamat Pengiriman
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 12,
                marginTop: 10,
                color: "#AEAFB1",
              }}
            >
              Isilah dengan alamat yang benar
            </Text>
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "48%",
              }}
            >
              <Text
                style={{
                  fontFamily: "JakartaExtraB",
                  fontSize: 10,
                  marginTop: 15,
                  color: "#AEAFB1",
                }}
              >
                Nama Penerima
              </Text>
              <TextInput
                autoFocus={true}
                placeholder="John"
                onFocus={() => {
                  //change border color
                  setColors(true);
                }}
                onBlur={() => {
                  //change border color
                  setColors(false);
                }}
                style={{
                  borderColor: color ? "#FF4F6F" : "#DADEE3",
                  borderWidth: 2,
                  paddingLeft: 10,
                  borderRadius: 10,
                  height: 65,
                  fontFamily: "JakartaExtraB",
                  fontSize: 12,
                  marginTop: 15,
                  width: "100%",
                }}
              />
            </View>
            <View
              style={{
                width: "48%",
              }}
            >
              <Text
                style={{
                  fontFamily: "JakartaExtraB",
                  fontSize: 10,
                  marginTop: 15,
                  color: "#AEAFB1",
                }}
              >
                Nama Penerima Kedua
              </Text>
              <TextInput
                placeholder="Doe"
                onFocus={() => {
                  //change border color
                  setColors2(true);
                }}
                onBlur={() => {
                  //change border color
                  setColors2(false);
                }}
                style={{
                  borderColor: color2 ? "#FF4F6F" : "#DADEE3",
                  borderWidth: 2,
                  paddingLeft: 10,
                  borderRadius: 10,
                  height: 65,
                  fontFamily: "JakartaExtraB",
                  fontSize: 12,
                  marginTop: 15,
                  width: "100%",
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 10,
                marginTop: 15,
                color: "#AEAFB1",
              }}
            >
              Provinsi
            </Text>
            <TextInput
              placeholder="contoh: Jawa Barat"
              onFocus={() => {
                //change border color
                setColors3(true);
              }}
              onBlur={() => {
                //change border color
                setColors3(false);
              }}
              style={{
                borderColor: color3 ? "#FF4F6F" : "#DADEE3",
                borderWidth: 2,
                paddingLeft: 10,
                borderRadius: 10,
                height: 65,
                fontFamily: "JakartaExtraB",
                fontSize: 12,
                marginTop: 15,
                width: "100%",
              }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 10,
                marginTop: 15,
                color: "#AEAFB1",
              }}
            >
              Kota
            </Text>
            <TextInput
              placeholder="contoh: Bandung"
              onFocus={() => {
                //change border color
                setColors3(true);
              }}
              onBlur={() => {
                //change border color
                setColors3(false);
              }}
              style={{
                borderColor: color3 ? "#FF4F6F" : "#DADEE3",
                borderWidth: 2,
                paddingLeft: 10,
                borderRadius: 10,
                height: 65,
                fontFamily: "JakartaExtraB",
                fontSize: 12,
                marginTop: 15,
                width: "100%",
              }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 10,
                marginTop: 15,
                color: "#AEAFB1",
              }}
            >
              Alamat Lengkap
            </Text>
            <TextInput
              onFocus={() => {
                //change border color
                setColors3(true);
              }}
              onBlur={() => {
                //change border color
                setColors3(false);
              }}
              style={{
                borderColor: color3 ? "#FF4F6F" : "#DADEE3",
                borderWidth: 2,
                paddingLeft: 10,
                borderRadius: 10,
                height: 65,
                fontFamily: "JakartaExtraB",
                fontSize: 12,
                marginTop: 15,
                width: "100%",
              }}
            />
          </View>
        </ScrollView>
        <Pressable onPress={handlePress}>
          <View style={styles.button_style}>
            <Text style={{ fontFamily: "JakartaExtraB", color: "white" }}>
              Lanjutkan
            </Text>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AlamatInput;

const styles = StyleSheet.create({
  main_container: {
    marginHorizontal: 20,
    flex: 1,
  },
  button_style: {
    width: "100%",
    height: 60,
    backgroundColor: "#FF4F6F",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
});
