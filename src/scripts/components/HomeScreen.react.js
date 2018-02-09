import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Icon }                                     from "react-native-elements";
import Header                                       from "./skeleton/Header.react";
import List                                         from "./skeleton/List.react";
import Menu                                         from "./skeleton/Menu.react";
import storage                                      from "../utils/storage";

class HomeScreen extends Component {
    state = {
        isMenuOpen: false,
        listName: "",
        lists: [],
        list: []
    }

    toogleMenu = () => {
        this.setState({isMenuOpen : !this.state.isMenuOpen})
    }

    choseList = name => {
        storage.save("listName", name);
        this.setState({listName: name});

        this.loadData();
    }

    async loadData() {
        await storage.load("listName").then(data => {this.setState({listName: data || "Default"})});
        await storage.load("lists").then(data => {this.setState({lists: JSON.parse(data) || []})});
        await storage.load(this.state.listName).then(data => {this.setState({list: JSON.parse(data) || []})});
    }

    componentDidMount() {
       this.timerID = setInterval(
         () => this.loadData(),
         500
       );
    }

    componentWillUnmount() {
       clearInterval(this.timerID);
    }

    render() {
        return (
            <View style={main.container}>
                <Header listName={this.state.listName} toogleMenu={this.toogleMenu}/>
                <ScrollView style={main.container}>
                    {this.state.list.map((data, key) => <List key={key} data={data}/>)}
                </ScrollView>
                <Menu
                    isMenuOpen={this.state.isMenuOpen}
                    lists={this.state.lists}
                    choseList={this.choseList}
                    toogleMenu={this.toogleMenu}
                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../styles/skeletonStyles"));

export default HomeScreen;
