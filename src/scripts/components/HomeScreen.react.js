import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "./skeleton/Header.react";
import List from "./skeleton/List.react";

const request = async currencies => {
    try {
        let currencies = await fetch("https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=pln")
            .then((data) => {return data.json()});

        console.log(currencies[0]);
    } catch (error) {
        console.log(error);
    }
}

class HomeScreen extends Component {

    state:

    render() {
        return (
            <View style={main.container}>
                <Header></Header>
                <View style={main.container}>

                </View>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));

export default HomeScreen;
