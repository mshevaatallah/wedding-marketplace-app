import { SafeAreaView, StyleSheet, Text } from "react-native";

import RegisterOTP from "./pages/Auth/RegisterOTP";

export default function App() {
  return <RegisterOTP />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
