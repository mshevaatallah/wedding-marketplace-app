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
import React, { useCallback, useContext, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Context } from "../navigation";

SplashScreen.preventAutoHideAsync();
const LoginEmail = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../assets/fonts/JakartaMedium.ttf"),
  });
  const [color, setColors] = useState(false);
  const { toggleLogged } = useContext(Context);
  const [color3, setColors3] = useState(false);
  const { email, password } = useContext(Context);
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const handlePress = () => {
    if (emailValue.length < 1) {
      alert("Email tidak boleh kosong");
    } else if (passwordValue.length < 1) {
      alert("Password tidak boleh kosong");
    } else if (emailValue != email) {
      alert("Email tidak terdaftar");
    } else if (passwordValue != password) {
      alert("Password salah");
    } else {
      toggleLogged();
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
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 30,
                marginTop: 15,
              }}
            >
              Masuk dengan email
            </Text>
            <Text
              style={{
                fontFamily: "JakartaRegular",
                fontSize: 14,
                color: "#9B9B9B",
                marginTop: 10,
              }}
            >
              Masukan email yang sudah terdaftar
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 12,
                marginTop: 15,
                color: "#AEAFB1",
              }}
            >
              Email
            </Text>
            <TextInput
              autoFocus={true}
              placeholder="johndoe@gmail.com"
              onFocus={() => {
                //change border color
                setColors3(true);
              }}
              onBlur={() => {
                //change border color
                setColors3(false);
              }}
              onChangeText={(text) => setEmail(text)}
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
                fontSize: 12,
                marginTop: 15,
                color: "#AEAFB1",
              }}
            >
              Password
            </Text>
            <TextInput
              secureTextEntry={true}
              placeholder="Password kamu"
              onFocus={() => {
                //change border color
                setColors(true);
              }}
              onBlur={() => {
                //change border color
                setColors(false);
              }}
              onChangeText={(text) => setPassword(text)}
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
        </ScrollView>
        <Pressable onPress={handlePress}>
          <View style={styles.button_style}>
            <Text style={{ fontFamily: "JakartaExtraB", color: "white" }}>
              Masuk
            </Text>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginEmail;

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
    marginBottom: 15,
  },
});
