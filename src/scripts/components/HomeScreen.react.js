import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, AsyncStorage } from "react-native";
import { Icon }                                     from "react-native-elements";
import Header                                       from "./skeleton/Header.react";
import List                                         from "./skeleton/List.react";
import Menu                                         from "./skeleton/Menu.react";
import storage                                      from "../utils/storage";


class HomeScreen extends Component {
    state = {
        isMenuOpen: false,
        listName: "TOP 10",
        list: [
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

    toogleMenu = () => {
        this.setState( {
            isMenuOpen : !this.state.isMenuOpen
        } );

        storage.save("listName", "TOP 10");
    }

    componentDidMount() {
        storage.load("listName").then(data => {this.setState({listName: data || "TOP 10"})});
        storage.load("list").then(data => {this.setState({list: data || []})});
    }

    render() {
        return (
            <View style={main.container}>
                <Header listName={this.state.listName} toogleMenu={this.toogleMenu}/>
                <ScrollView style={main.container}>
                    {this.state.list.map((data, key) => {return( <List key={key} data={data}/> )})}
                </ScrollView>
                <Menu isMenuOpen={this.state.isMenuOpen} navigation={this.props.navigation}/>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../styles/skeletonStyles"));

export default HomeScreen;
