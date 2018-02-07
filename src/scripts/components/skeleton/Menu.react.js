import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon }                                     from "react-native-elements";

class Menu extends Component {
    render() {
        const menuClass = this.props.isMenuOpen ? [skStyles.menu] : [skStyles.menu, {display: "none"}];

        return (
            <View style={menuClass}>
                <TouchableOpacity style={main.bottomB}>
                    <View style={[main.btn, main.center]}>
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
