import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterOTP from "./pages/Auth/RegisterOTP";
import InputOTP from "./pages/Auth/InputOTP";
import RegisterAccount from "./pages/Auth/RegisterAccount";
import Login from "./pages/Auth/Login";
import LoginEmail from "./pages/Auth/LoginEmail";
import Welcome from "./pages/Auth/Welcome";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterAccount"
          component={RegisterAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterOTP"
          component={RegisterOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InputOTP"
          component={InputOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginEmail"
          component={LoginEmail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
