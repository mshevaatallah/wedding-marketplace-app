import { StyleSheet } from "react-native";
import React, { useContext, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../Main/Home";
import Transaksi from "../Main/Transaksi";
import Message from "../Main/Message";
import Profile from "../Main/Profile";
import InputOTP from "../Auth/InputOTP";
import Welcome from "../Auth/Welcome";
import RegisterAccount from "../Auth/RegisterAccount";
import RegisterOTP from "../Auth/RegisterOTP";
import Login from "../Auth/Login";
import LoginEmail from "../Auth/LoginEmail";
import MakeUp from "../Main/stack/MakeUp";
import MakeUpOne from "../Main/stack/details_makeup/MakeUpOne";
import Likes from "../Main/Likes";
import Payment from "../Main/Payment";
import AlamatInput from "../Main/AlamatInput";
import SellerChat from "../Main/stack/details_makeup/SellerChat";
import PusatBantuan from "../Main/PusatBantuan";
import EditProfile from "../Main/EditProfile";

export const Context = React.createContext(null);
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const AppNavigation = () => {
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../assets/fonts/JakartaMedium.ttf"),
  });

  const screenOptions = {
    swipeEnabled: true,

    tabBarActiveTintColor: "#FF4F6F",
    tabBarInactiveTintColor: "gray",
    tabBarLabelStyle: {
      fontSize: 10,
    },

    barStyle: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 0,
      paddingTop: 7,
      backgroundColor: "white",
      height: 80,
    },
  };

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  function MyTabs() {
    return (
      <Tab.Navigator
        barStyle={{ paddingTop: 7, backgroundColor: "white", height: 80 }}
        activeColor="#FF4F6F"
        inactiveColor="gray"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Transaksi"
          component={Transaksi}
          options={{
            tabBarLabel: "Transaksi",
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "receipt" : "receipt-outline"}
                color={color}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Pesan"
          component={Message}
          options={{
            tabBarLabel: "Pesan",
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "notifications" : "notifications-outline"}
                color={color}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profil"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={color}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogged = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const [name, setName] = useState("");
  const [nameB, setNameB] = useState("");

  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState(null);
  const [password, setPassword] = useState("");
  const [likes, setLikes] = useState([]);

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        toggleLogged,
        setIsLoggedIn,
        setName,
        setEmail,
        setPassword,
        setPhone_number,
        setNameB,
        name,
        email,
        password,
        nameB,
        phone_number,
        setPhone_number,
        likes,

        setLikes,
      }}
    >
      <NavigationContainer>
        {isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={MyTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Makeup"
              component={MakeUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MakeupOne"
              component={MakeUpOne}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Likes"
              component={Likes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AlamatInput"
              component={AlamatInput}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerChat"
              component={SellerChat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PusatBantuan"
              component={PusatBantuan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
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
        )}
      </NavigationContainer>
    </Context.Provider>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
