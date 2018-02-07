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
        listName: "",
        list: []
    }

    toogleMenu = () => {
        this.setState( {
            isMenuOpen : !this.state.isMenuOpen
        } );
    }

    loadData = () => {
        storage.load("listName").then(data => {this.setState({listName: data || "Default"})});
        storage.load(this.state.listName).then(data => {console.log(data)});
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <View style={main.container}>
                <Header listName={this.state.listName} toogleMenu={this.toogleMenu}/>
                <ScrollView style={main.container}>
                    {this.state.list.map((data, key) => {return( <List key={key} data={data}/> )})}
                </ScrollView>
                <Menu isMenuOpen={this.state.isMenuOpen} toogleMenu={this.toogleMenu} navigation={this.props.navigation}/>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../styles/skeletonStyles"));

export default HomeScreen;
