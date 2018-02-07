import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Icon }                                     from "react-native-elements";
import Header                                       from "./skeleton/Header.react";
import List                                         from "./skeleton/List.react";
import Menu                                         from "./skeleton/Menu.react";

class HomeScreen extends Component {
    state = {
        isMenuOpen: false,
        listName: "TOP 10",
        listArray: [
            {
                name: "LSK",
                curr: "PLN"
            }, {
                name: "BTC",
                curr: "EUR"
            }, {
                name: "ETH",
                curr: "PLN"
            }
        ]
    }

    toogleMenu = () => {
        this.setState( {
            isMenuOpen : !this.state.isMenuOpen
        } );
    }

    render() {
        return (
            <View style={main.container}>
                <Header listName={this.state.listName} toogleMenu={this.toogleMenu}/>
                <ScrollView style={main.container}>
                    {this.state.listArray.map((data, key) => {return( <List key={key} data={data}/> )})}
                </ScrollView>
                <Menu isMenuOpen={this.state.isMenuOpen}/>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../styles/skeletonStyles"));

export default HomeScreen;
