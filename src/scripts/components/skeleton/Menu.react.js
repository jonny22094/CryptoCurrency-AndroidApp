import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon }                                     from "react-native-elements";

class Menu extends Component {
  render() {
    const theme = this.props.navigation.state.params.theme;
    const menuClass = this.props.isMenuOpen
      ? [theme.container, theme.border, main.border, skeleton.menu]
      : [theme.container, theme.border, main.border, skeleton.menu, {display: "none"}];

    return (
      <View style={menuClass}>
        {this.props.lists.map((data, key) => (
          <TouchableOpacity
            key={key}
            style={[theme.border, main.bottomB]}
            onPress={() => {this.props.choseList(data); this.props.toogleMenu()}}>
              <View style={[main.btn, main.center, {height: 40}]}>
                <Text style={[theme.text, main.btnIcon]}>
                  {data}
                </Text>
              </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[theme.border, main.bottomB]}
          onPress={() => {
            this.props.navigation.navigate("NewList", {listName: "", theme: theme});
            this.props.toogleMenu()
          }
        }>
          <View style={[main.btn, main.center, {height: 40}]}>
            <Icon
              type="entypo"
              name="plus"
              iconStyle={[theme.text, main.btnIcon, main.btnText]}
              containerStyle={main.center}/>
          </View>
        </TouchableOpacity>
        </View>
    );
  }
}

const main = StyleSheet.create(require("../../../styles/Arrangement"));
const skeleton = StyleSheet.create(require("../../../styles/skeletonStyles"));

export default Menu;
