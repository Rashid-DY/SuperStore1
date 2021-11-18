import { CurrentRenderContext } from '@react-navigation/native';
import React from 'react';
import {View, TextInput, Text, TouchableOpacity, Image,} from 'react-native';

const SignUp = ({navigation}) => {

    return (
        <View style={{
                backgroundColor: "white",
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
            <Image
                style={{
                    backgroundColor: 'white',
                    flex: 0,
                    borderRadius: 20,
                    marginBottom: 20,
                    width: 350,
                    height: 150,
                 }}
        source={{
          uri: "https://www.nicepng.com/png/full/369-3697949_universal-studios-home-entertainment-superstore-season.png"
        }}
        />
        <Text style={{  fontSize: 25, marginBottom: 70, fontWeight: "bold", color: "#4189ca" }}>Getting Started!</Text>
        <View style={{backgroundColor: 'white', flex: 0, marginTop: 0 }} >
                <TextInput
                    style={{
                    backgroundColor: 'white',
                    width: 300,
                    height: 50,
                    padding: 8,
                    borderRadius: 10,
                    borderWidth: 0.7,
                    }}
                    placeholder="Email address"
                />
        </View>
        <View style={{backgroundColor: 'white', flex: 0, marginTop: 0 }} >
                <TextInput
                     secureTextEntry={true}
                     onChangeText={(
                       e
                     )=> {
                       console.log(e)
                     }}
                    style={{
                    backgroundColor: 'white',
                    width: 300,
                    height: 50,
                    padding: 8,
                    margin:10,
                    borderRadius: 10,
                    borderWidth: 0.7,
                    }}
                    placeholder="Create password"
                />
        </View>
        <View style={{backgroundColor: 'white', flex: 0, marginTop: 0 }} >
                <TextInput
                    style={{
                    backgroundColor: 'white',
                    width: 300,
                    height: 50,
                    padding: 8,
                    borderRadius: 10,
                    borderWidth: 0.7,
                    }}
                    placeholder="Confirm password"
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
        <Text style={{ padding: 2, color: "white" }}>Create account</Text>
        
        </TouchableOpacity>
    </View>
    );
};

export default SignUp;