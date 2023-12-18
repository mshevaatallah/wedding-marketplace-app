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
import { SelectList } from "react-native-dropdown-select-list";

SplashScreen.preventAutoHideAsync();
const Login = () => {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "+62", selected: true },
    { key: "2", value: "+65" },
    { key: "3", value: "+88" },
    { key: "4", value: "+95" },
    { key: "5", value: "+65" },
    { key: "6", value: "+88" },
    { key: "7", value: "+95" },
  ];
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../assets/fonts/JakartaMedium.ttf"),
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
    <SafeAreaView style={styles.main_container} onLayout={onLayoutRootView}>
      <StatusBar style="dark" />
      <Ionicons name="arrow-back-outline" size={35} />
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 30,
                marginTop: 15,
              }}
            >
              Mari kita mulai !
            </Text>
            <Text
              style={{
                fontFamily: "JakartaRegular",
                maxWidth: "90%",
                marginTop: 10,
                color: "grey",
              }}
            >
              Masukan nomor telepon anda. Kami akan mengirimkan kode OTP
            </Text>
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontFamily: "JakartaMedium", color: "#FF4F6F" }}>
                Sudah punya akun? <Text> Log in</Text>
              </Text>
            </View>
          </View>

          <View style={styles.number_container}>
            <View style={styles.region_code}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                defaultOption={data[0]}
                search={false}
                arrowicon={false}
                save="value"
                fontFamily="JakartaMedium"
                boxStyles={{
                  height: 65,
                  backgroundColor: "#edeff3",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderColor: "transparent",
                }}
                dropdownStyles={{
                  backgroundColor: "#edeff3",
                  borderRadius: 15,
                  alignItems: "center",
                  borderColor: "transparent",
                }}
              />
            </View>
            <TextInput
              autoFocus={true}
              keyboardType="numeric"
              maxLength={12}
              style={styles.number_code}
            ></TextInput>
          </View>
        </ScrollView>
        <Pressable>
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

export default Login;

const styles = StyleSheet.create({
  main_container: {
    marginHorizontal: 20,
    flex: 1,
  },
  number_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  region_code: {
    width: "25%",
    height: 65,
    backgroundColor: "#edeff3",
    borderRadius: 15,
  },
  number_code: {
    width: "70%",
    height: 65,
    backgroundColor: "#e1e3e8",
    fontFamily: "JakartaMedium",
    borderRadius: 15,
    paddingLeft: 20,
    fontSize: 15,
  },

  button_style: {
    width: "100%",
    height: 65,
    backgroundColor: "#FF4F6F",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});
