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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useContext, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Context } from "../navigation";

const RegisterAccount = ({ navigation }) => {
  const {
    setEmail,
    setPassword,
    setName,
    setNameB,
    name,
    nameB,
    email,
    password,
  } = useContext(Context);
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../assets/fonts/JakartaMedium.ttf"),
  });
  const [ConfirmPassword, setConfirmPassword] = useState("");
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
    if (name === "") {
      alert("Nama Depan tidak boleh kosong");
      return;
    } else if (nameB === "") {
      alert("Nama Belakang tidak boleh kosong");
      return;
    } else if (email === "") {
      alert("Email tidak boleh kosong");
      return;
    } else if (password === "") {
      alert("Password tidak boleh kosong");
      return;
    } else if (ConfirmPassword === "") {
      alert("Konfirmasi Password tidak boleh kosong");
      return;
    } else if (password !== ConfirmPassword) {
      alert("Password tidak sama");
      return;
    } else {
      navigation.navigate("RegisterOTP");
    }
  };
  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.main_container}>
      <StatusBar style="dark" />
      <Ionicons
        name="arrow-back-outline"
        size={35}
        suppressHighlighting={true}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
          <View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 30,
                marginTop: 15,
              }}
            >
              Buatlah akun mu !
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 12,
                marginTop: 10,
                color: "#AEAFB1",
              }}
            >
              Sudah punya akun ?{" "}
              <Text
                style={{
                  color: "#FF4F6F",
                  fontFamily: "JakartaExtraB",
                  marginLeft: 1,
                  textDecorationLine: "underline",
                }}
                suppressHighlighting={true}
                onPress={() => navigation.navigate("Login")}
              >
                {" "}
                Masuk disini
              </Text>
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
                Nama Depan
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
                onChangeText={(text) => {
                  setName(text);
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
                Nama Belakang
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
                onChangeText={(text) => {
                  setNameB(text);
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
              Email
            </Text>
            <TextInput
              placeholder="johndoe@gmail.com"
              onChangeText={(text) => {
                setEmail(text);
              }}
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
              Password
            </Text>
            <TextInput
              onChangeText={(text) => {
                setPassword(text);
              }}
              secureTextEntry={true}
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
              Konfirmasi Password
            </Text>
            <TextInput
              secureTextEntry={true}
              onFocus={() => {
                //change border color
                setColors3(true);
              }}
              onBlur={() => {
                //change border color
                setColors3(false);
              }}
              onChangeText={(text) => {
                setConfirmPassword(text);
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterAccount;

const styles = StyleSheet.create({
  main_container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "white",
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
