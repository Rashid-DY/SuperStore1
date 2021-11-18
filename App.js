 import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./screens/pages/Login";
import Home from "./screens/pages/Home";
import Details from "./screens/pages/Details";
import SignUp from "./screens/pages/SignUp";
import Checkout from "./screens/pages/Checkout";

export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{flex: 1,}}>
      <NavigationContainer>
        <MainNavigator.Navigator initialRouteName="Login">
          <MainNavigator.Screen name="Login" component={Login}/>
          <MainNavigator.Screen name="Home" component={Home}/>
          <MainNavigator.Screen name="Details" component={Details}/>
          <MainNavigator.Screen name="SignUp" component={SignUp}/>
          <MainNavigator.Screen name="Checkout" component={Checkout}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#675423',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
