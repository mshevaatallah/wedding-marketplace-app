import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useContext, useState } from "react";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Context } from "../navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const InputOTP = ({ route, navigation }) => {
  const { value, selected } = route.params;
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../assets/fonts/JakartaMedium.ttf"),
  });
  const { isLogged, toggleLogged } = useContext(Context);
  const [code, setCode] = useState("");
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = () => {
    if (code.length < 4) {
      alert("Kode OTP harus 4 digit");
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
              Masukan kode OTP yang dikirimkan ke
            </Text>
            <Text
              style={{
                fontFamily: "JakartaMedium",
                fontSize: 15,
                marginTop: 15,
              }}
            >
              ({selected}) {value}
            </Text>
          </View>
          {/* <OTPInputView
            style={{
              width: "95%",
              height: 120,
              alignSelf: "center",
            }}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            
            onCodeFilled={(code) => {
              setCode(code);
            }}
          /> */}
          {/* <OtpInput value={otp} onChange={setOtp} numInputs={4} /> */}
          <View
            style={{
              marginTop: 40,
              marginBottom: 30,
            }}
          >
            <OtpInput
              numberOfDigits={4}
              focusColor="#FF4F6F"
              focusStickBlinkingDuration={500}
              onTextChange={(text) => setCode(text)}
              onFilled={(text) => console.log(`OTP is ${text}`)}
              theme={{
                containerStyle: styles.container,
                inputsContainerStyle: styles.inputsContainer,
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                focusStickStyle: styles.focusStick,
                focusedPinCodeContainerStyle: styles.activePinCodeContainer,
              }}
            />
          </View>

          <Text style={{ fontFamily: "JakartaMedium", fontSize: 13 }}>
            Belum mendapatkan kode?{" "}
            <Text style={{ color: "#FF4F6F", textDecorationLine: "underline" }}>
              {" "}
              Kirim ulang
            </Text>
          </Text>
        </ScrollView>
        <Pressable
          onPress={handlePress}
          style={{
            marginTop: 20,
          }}
        >
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

export default InputOTP;

const styles = StyleSheet.create({
  main_container: {
    marginHorizontal: 20,
    flex: 1,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#FF4F6F",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    color: "#FF4F6F",
    fontFamily: "JakartaExtraB",
  },

  underlineStyleHighLighted: {
    borderColor: "#FF4F6F",
    color: "#FF4F6F",
  },
  button_style: {
    width: "100%",
    height: 60,
    backgroundColor: "#FF4F6F",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
