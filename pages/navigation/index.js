import { StyleSheet } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../Main/Home";
import Vendor from "../Main/Vendor";
import Message from "../Main/Message";
import Profile from "../Main/Profile";
const screenOptions = {
  tabBarActiveTintColor: "#FF4F6F",
  tabBarInactiveTintColor: "gray",

  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: "blue",
    height: 60,
  },
};
const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
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
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="HomeScreen" component={Home} />
        <Tab.Screen name="Vendors" component={Vendor} />
        <Tab.Screen name="Message" component={Message} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
