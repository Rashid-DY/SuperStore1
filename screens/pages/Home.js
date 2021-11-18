import React from "react";
import {View, Text, SafeAreaView, StyleSheet, FlatList, Image, Dimensions} from "react-native";
import { TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import shirts from '../consts/shirts';
import pants from '../consts/pants';
import shoes from '../consts/shoes';

const width = Dimensions.get("screen").width/2-12;

export default function Home({navigation}) {
    const categories = ['SHIRTS', 'PANTS', 'SHOES'];

    const [categoryIndex, setCategoryIndex] = React.useState(0)

    const CategoryList = () =>{
        return (
            <View style={style.categoryContainer}>
                {categories.map((item, index)=>(
                    <TouchableOpacity key={index} 
                    activeOpacity={0.8}
                    onPress={()=>setCategoryIndex(index)}>
                         <Text 
                        key={index} 
                        style={[
                            style.categoryText, 
                            categoryIndex == index && style.categoryTextSelected
                        ]}>
                        {item}
                    </Text>
                    </TouchableOpacity>
                   
                ))}
            </View>
        );
    };

    const Card = ({item}) => {
        return (
        <TouchableOpacity onPress={() =>navigation.navigate("Details", item)} >
            <View style={style.card}>
            <View style={{height: 100, alignItems: 'center'}}>
                    <Image source={item.img} style={{flex: 1, resizeMode: 'contain'}}/>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 20}}>
                {item.name}
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}} >
                <Text style={{fontSize: 20, fontWeight: 'bold'}} >${item.price}</Text>
            </View>    
        </View>
        </TouchableOpacity>
        );
    };
    return (
    <SafeAreaView 
        style={{
            flex: 1, 
            paddinghorizontal: 20, 
            backgroundColor: "white"
    }}>
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
        <TouchableOpacity onPress={() => {navigation.navigate("Checkout");}}>
            <Ionicons name="cart-outline" size={35}/>
        </TouchableOpacity>
        </View>
        <View style={{marginTop: 30, flexDirection: 'row'}}>
            <View style={style.searchContainer}>
                <Ionicons name="search" size ={25} style={{marginLeft: 20}}/>
                <TextInput style={{height: 50, width: 250, borderColor: 'black', flex: 1, flexDirection: 'row', alignItems: 'center'}} placeholder="Search"/>
            </View>
            <View style={style.sortBtn}>
                <TouchableOpacity>
                    <MaterialIcons name="sort" size={30} color='white'/>
                </TouchableOpacity>
            </View>
        </View>
        <CategoryList  />
        <FlatList 
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{
                marginTop: 10,
                paddingBottom: 50
            }}
            showsVertical
            numColumns={2} 
            data={
                categoryIndex === 0 ? shirts : 
                categoryIndex === 1 ? pants : shoes} 
            renderItem={({item}) => 
            <Card item={item} /> } 
        />
    </SafeAreaView>
    );

    
};

const style = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchContainer: {
        height: 50,
        width: 250,
        backgroundColor: "white",
        borderColor: "#4189ca",
        borderWidth: 1.5,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: 'black'
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: '#4189ca',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    categoryText: {
        color: 'grey',
        fontWeight: 'bold'
    },
    categoryTextSelected: {
        color: "#4189ca", 
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: "#4189ca"
    },

    card: {
        height: 230,
        backgroundColor: '#f7f7ff',
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        borderColor: "#4189ca",
        borderWidth: 0.5,
        margin: 10,
        padding: 15,

    }

})