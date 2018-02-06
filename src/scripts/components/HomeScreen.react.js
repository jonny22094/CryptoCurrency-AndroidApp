import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "./skeleton/Header.react";
import List from "./skeleton/List.react";
import requests from "../requests/requests";

class HomeScreen extends Component {

    state: {
        listName: "top10",
        listArray: []
    }

    response() {
        const l = requests().done();

        console.log(l);
    }

    render() {
        this.response();
        return (
            <View style={main.container}>
                <Header/>
                <View style={main.container}>
                    <List name={"BTC"} value={30}/>
                    <List name={"BTC"} value={30}/>
                    <List name={"BTC"} value={30}/>
                </View>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));

export default HomeScreen;
