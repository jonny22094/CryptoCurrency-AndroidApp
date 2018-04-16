import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Icon }                                     from "react-native-elements";
import Header                                       from "./skeleton/Header.react";
import List                                         from "./skeleton/List.react";
import Menu                                         from "./skeleton/Menu.react";
import cc                                           from "cryptocompare";
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
    await storage.load(this.state.listName).then(async data => {
      let list = [];
      data = JSON.parse(data);
      
      for(const i in data) {
        const a = await cc.priceFull(data[i].name, data[i].curr);
        list.push(a[data[i].name][data[i].curr]);
      }

      this.setState({list: list});
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
    () => this.loadData(),
    1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const theme = this.props.navigation.state.params.theme;
    return (
      <View style={[theme.container, main.container]}>
        <Header
          listName={this.state.listName}
          loadData={this.loadData}
          toogleMenu={this.toogleMenu}
          navigation={this.props.navigation}
        />
        <ScrollView style={main.container}>
          {this.state.list.map((data, key) =>
            <List
              key={key}
              data={data}
              theme={theme}
            />
          )}
        </ScrollView>
        <Menu
          isMenuOpen={this.state.isMenuOpen}
          loadData={this.loadData}
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

export default HomeScreen;
