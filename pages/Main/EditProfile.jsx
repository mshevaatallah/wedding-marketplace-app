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

const EditProfile = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../assets/fonts/JakartaMedium.ttf"),
  });
  const {
    setEmail,
    setPassword,
    setName,
    setNameB,
    setPhone_number,
    name,
    nameB,
    email,
    password,
  } = useContext(Context);
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [NamaDepan, setNamaDepan] = useState("");
  const [NamaBelakang, setNamaBelakang] = useState("");
  const [EmailChange, setEmailChange] = useState("");
  const [PhoneChange, setPhoneChange] = useState("");

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
    if (NamaDepan === "") {
      alert("Nama Depan tidak boleh kosong");
      return;
    } else if (NamaBelakang === "") {
      alert("Nama Belakang tidak boleh kosong");
      return;
    } else if (EmailChange === "") {
      alert("Email tidak boleh kosong");
      return;
    } else if (PhoneChange === "") {
      alert("Nomor Handphone tidak boleh kosong");
      return;
    } else {
      setEmail(EmailChange);
      setName(NamaDepan);
      setNameB(NamaBelakang);
      setPhone_number(PhoneChange);
      navigation.navigate("Tabs");
    }
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
              Ubah Profil
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 12,
                marginTop: 10,
                color: "#AEAFB1",
              }}
            >
              Isilah dengan profil yang benar
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
                onChangeText={(text) => setNamaDepan(text)}
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
                onChangeText={(text) => setNamaBelakang(text)}
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
              placeholder="yourmail@mail.com"
              onFocus={() => {
                //change border color
                setColors3(true);
              }}
              onBlur={() => {
                //change border color
                setColors3(false);
              }}
              onChangeText={(text) => setEmailChange(text)}
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
              Nomor Handphone
            </Text>
            <TextInput
              keyboardType="numeric"
              placeholder="08xxxxx"
              onFocus={() => {
                //change border color
                setColors3(true);
              }}
              onBlur={() => {
                //change border color
                setColors3(false);
              }}
              onChangeText={(text) => setPhoneChange(text)}
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

export default EditProfile;

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
