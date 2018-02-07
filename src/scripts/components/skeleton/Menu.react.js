import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon }                                     from "react-native-elements";

class Menu extends Component {
    render() {
        const menuClass = this.props.isMenuOpen ? [main.border, skStyles.menu] : [main.border, skStyles.menu, {display: "none"}];

        return (
            <View style={menuClass}>
                <TouchableOpacity style={main.bottomB} onPress={() => {this.props.navigation.navigate("NewList"); this.props.toogleMenu}}>
                    <View style={[main.btn, main.center, {height: 40}]}>
                        <Icon type="font-awesome" name="plus-circle" iconStyle={[main.btnIcon, {fontSize: 25}]} containerStyle={main.center}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../../styles/skeletonStyles"));

export default Menu;
