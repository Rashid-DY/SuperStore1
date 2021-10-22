import React from 'react';
import {View, Text, Image} from 'react-native';

export default function login() {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColour: 'blue'}}>
            <image
            style={{
                width: 150,
                height: 150,
                borderRadius: 10,
                marginBottom: 15,
            }} 
            source={{
                url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.brandsoftheworld.com%2Flogo%2Fsuperstore-0&psig=AOvVaw0lRqnywU_lNJ91dHikKOwg&ust=1635030363083000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICmrvSQ3_MCFQAAAAAdAAAAABAb"
            }}/>
            <Text style={{colour: 'white', fontSize: 25}}>Hi, how are you?</Text>
        </View> 
    )
}