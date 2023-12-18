import { SafeAreaView, StyleSheet, Text } from "react-native";

import RegisterOTP from "./pages/Auth/RegisterOTP";
import InputOTP from "./pages/Auth/InputOTP";

export default function App() {
  return <InputOTP />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
