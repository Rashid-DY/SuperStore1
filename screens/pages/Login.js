import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{  fontSize: 40, fontWeight: "bold", color: "#4189ca" }}>Welcome to</Text>
      <Image
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          marginBottom: 40,
          width: 350,
          height: 150,
        }}
        source={{
          uri: "https://www.nicepng.com/png/full/369-3697949_universal-studios-home-entertainment-superstore-season.png"
        }}
      />
      <Text>Sign in with:</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image style={{width: 30, height: 30, marginHorizontal: 30, marginVertical: 10}} source={{uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"}} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{width: 30, height: 30, marginHorizontal: 30, marginVertical: 10}} source={{uri: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"}} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{width: 30, height: 30, marginHorizontal: 30, marginVertical: 10}} source={{uri: "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"}} />
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <TextInput
          style={{
            width: 250,
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
          }}
          placeholder="Username or Email"
        />
      </View>
      <View style={{ marginVertical: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            width: 250,
            borderRadius: 10,
            borderWidth: 0.7,
            justifyContent: 'flex-start'
          }}
          placeholder="Password"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginVertical: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#4189ca",
        }}
      >
        <Text style={{ padding: 2, color: "white" }}>Login</Text>
      </TouchableOpacity>
      <View style={{marginTop: 50}}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => {navigation.navigate("SignUp");}} >
          <Text style={{color: "#4189ca", fontWeight: 'bold', textDecorationLine: 'underline'}}>
             Click here to sign up!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}