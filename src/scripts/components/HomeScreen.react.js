import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Header                                       from "./skeleton/Header.react";
import List                                         from "./skeleton/List.react";

class HomeScreen extends Component {
    state = {
        listArray: [
            {
                name: "LSK",
                curr: "PLN"
            },
            {
                name: "BTC",
                curr: "EUR"
            },
            {
                name: "ETH",
                curr: "PLN"
            }
        ]
    }

    render() {
        return (
            <View style={main.container}>
                <Header/>
                <ScrollView style={main.container}>
                    {this.state.listArray.map((data, key) => {return( <List key={key} data={data}/> )})}
                </ScrollView>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));

export default HomeScreen;
