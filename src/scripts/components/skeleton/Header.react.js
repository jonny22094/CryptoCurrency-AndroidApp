import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon }                                     from "react-native-elements";

class Header extends Component {
  render() {
    const theme = this.props.navigation.state.params.theme;
    return (
      <View style={[theme.border, main.bottomB, main.verticalCenter, skeleton.header, {justifyContent: "space-between"}]}>
        <TouchableOpacity
          style={[main.rowContainer, main.btn]}
          onPress={() => this.props.toogleMenu()}
        >
          <Icon
            type="material-icons"
            name="arrow-drop-down"
            iconStyle={[theme.text, main.btnIcon]}
            containerStyle={main.center}
          />
            <Text style={[theme.text, main.btnIcon]}>
              {this.props.listName}
            </Text>
          </TouchableOpacity>
          <View style={main.rowContainer}>
            <TouchableOpacity
              style={[main.rowContainer, main.btn]}
              onPress={() => this.props.navigation.navigate("NewList", {listName: this.props.listName, theme: theme})}
            >
              <Icon
                type="material-icons"
                name="edit"
                iconStyle={[theme.text, main.btnIcon, main.btnText]}
                containerStyle={main.center}
              />
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const main = StyleSheet.create(require("../../../styles/Arrangement"));
const skeleton = StyleSheet.create(require("../../../styles/skeletonStyles"));

export default Header;

// <TouchableOpacity style={[main.rowContainer, main.btn]} onPress={() => this.props.navigation.navigate("Settings")}>
//     <Icon type="material-icons" name="settings" iconStyle={[main.btnIcon, main.btnText]} containerStyle={main.center}/>
// </TouchableOpacity>
