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
import { SelectList } from "react-native-dropdown-select-list";
import { Context } from "../navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

SplashScreen.preventAutoHideAsync();
const RegisterOTP = ({ navigation }) => {
  const { setPhone_number, phone_number } = useContext(Context);
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
    if (phone_number.length < 11) {
      alert("Nomor telepon harus lebih dari 11 digit");
    } else {
      navigation.navigate("InputOTP", {
        value: phone_number,
        selected: selected,
      });
    }
  };

  return (
    <SafeAreaView style={styles.main_container} onLayout={onLayoutRootView}>
      <StatusBar style="dark" />
      <Ionicons
        name="arrow-back-outline"
        size={35}
        suppressHighlighting={true}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView>
        <ScrollView>
          <View>
            <Text
              style={{
                fontFamily: "JakartaExtraB",
                fontSize: 30,
                marginTop: 15,
              }}
            >
              Verifikasi OTP
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
                Tidak menerima kode OTP?{" "}
              </Text>
            </View>
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
              onChange={(e) => setPhone_number(e.nativeEvent.text)}
            ></TextInput>
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

export default RegisterOTP;

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
    marginTop: 20,
  },
});
