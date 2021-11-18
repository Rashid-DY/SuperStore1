import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const Details = ({navigation, route}) => {

    const item = route.params;
    return (
       <SafeAreaView style={{flex: 1, backgroundColor: 'white'}} >
           <View style={style.header}>
           <TouchableOpacity onPress={() => {navigation.navigate("Checkout");}}>
                <Ionicons name="cart-outline" size={35}/>
            </TouchableOpacity>   
           </View>
           <View style={style.imageContainer} >
               <Image source={item.img} style={{resizeMode: 'contain', flex: 1}} />
           </View>
           <View style={style.detailsContainer} >
               <View style={{marginLeft: 20, marginRight: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
                   <Text style={{fontSize: 22, fontWeight: 'bold'}} >{item.name}</Text>
                   <View style={style.priceTag}>
                       <Text style={{marginLeft: 15, color: 'white', fontWeight: 'bold', fontSize: 16}} >${item.price}</Text>
                   </View>
               </View>
               <View style={{paddingHorizontal: 20, marginTop: 10}} >
                    <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>About</Text>
                   <Text style={{color: 'grey', fontSize: 16, lineHeight: 22, marginTop: 10}} >{item.about}</Text>
                   <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}} >
                       <View style={{flexDirection: 'row', alignItems: 'center'}} >
                           <View style={style.borderBtn} >
                               <Text style={style.borderBtnText}>-</Text>
                           </View>
                           <Text style={{fontSize: 20, marginHorizontal: 10, fontWeight: 'bold'}} >1</Text>
                           <View style={style.borderBtn} >
                               <Text style={style.borderBtnText}>+</Text>
                           </View>
                       </View>
                       <TouchableOpacity onPress={() => {navigation.navigate("Checkout");}}>
                        <View style={style.buyBtn} >
                            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}} >Go to Cart</Text>
                        </View>
                       </TouchableOpacity>
                   </View>
               </View>
           </View>
       </SafeAreaView>
    );
};

const style = StyleSheet.create({

    header: {
        paddingHorizontal:20, 
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    detailsContainer: {
        flex: 0.55,
        backgroundColor: 'white',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30
    },

    priceTag: {
        backgroundColor: "#4189ca",
        width: 80,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: "center"
    },

    borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },

    borderBtnText: {
        fontWeight: 'bold',
        fontSize: 28
    },

    buyBtn: {
        width: 150,
        height: 50,
        backgroundColor: "#4189ca",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }

})

export default Details;