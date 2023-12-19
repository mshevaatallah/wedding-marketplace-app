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
const Login = ({ navigation }) => {
  const [selected, setSelected] = useState("+62");
  const [value, setValue] = useState("");
  const data = [
    { key: "1", value: "+62" },
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
  const handlePress = () => {
    if (value.length < 11) {
      alert("Nomor telepon harus lebih dari 11 digit");
    } else {
      navigation.navigate("InputOTP", {
        value: value,
        selected: selected,
      });
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
        <ScrollView>
          <View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 30,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Masuk
            </Text>
            <Text
              style={{
                fontFamily: "JakartaRegular",
                fontSize: 16,
                color: "#9B9B9B",
              }}
            >
              Masukkan nomor telepon yang terdaftar
            </Text>
          </View>
          <View style={styles.number_container}>
            <View style={styles.region_code}>
              <SelectList
                setSelected={setSelected}
                data={data}
                search={false}
                defaultOption={data[0].value}
                arrowicon={false}
                placeholder="+62"
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
              onChange={(e) => setValue(e.nativeEvent.text)}
            ></TextInput>
          </View>
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 12,
              color: "#FF4F6F",
              marginBottom: 20,
              textDecorationLine: "underline",
            }}
          >
            Tidak bisa masuk dengan nomor telepon
          </Text>
          <Pressable onPress={handlePress}>
            <View style={styles.button_style}>
              <Text style={{ fontFamily: "JakartaExtraB", color: "white" }}>
                Lanjutkan
              </Text>
            </View>
          </Pressable>
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 12,
              color: "#9B9B9B",
              textAlign: "center",
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            atau
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <View style={styles.box_icons}>
              <Ionicons name="logo-apple" size={25} />
            </View>
            <View style={styles.box_icons2}>
              <Ionicons name="logo-facebook" size={25} color={"white"} />
            </View>
            <View style={styles.box_icons3}>
              <Ionicons name="mail-outline" size={25} color={"#F4776C"} />
            </View>
          </View>
        </ScrollView>
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
    marginBottom: 20,
  },
  region_code: {
    width: "25%",
    height: 65,
    backgroundColor: "#edeff3",
    borderRadius: 15,
  },
  number_code: {
    width: "72%",
    height: 65,
    backgroundColor: "#e1e3e8",
    fontFamily: "JakartaMedium",
    borderRadius: 15,
    paddingLeft: 20,
    fontSize: 15,
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
  box_icons: {
    width: 60,
    height: 60,
    backgroundColor: "#E2E2E2",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    marginRight: 15,
  },
  box_icons2: {
    width: 60,
    height: 60,
    backgroundColor: "#3b5998",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    marginRight: 15,
  },
  box_icons3: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E2E2E2",
    borderWidth: 1,
  },
});
