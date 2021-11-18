import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const Checkout = ({}) => {
    return(
        <View style={style.header}>
            <View>
                <Image
                    style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    width: 160,
                    height: 40,
                    }}
                    source={{
                    uri: "https://www.nicepng.com/png/full/369-3697949_universal-studios-home-entertainment-superstore-season.png"
                    }}
                />
        </View>
      </View>
    )
}

const style = StyleSheet.create({
    header: {
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'center'
    },
})

export default Checkout;