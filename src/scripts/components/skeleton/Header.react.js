import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon }                                     from "react-native-elements";

class Header extends Component {

    render() {
        return (
            <View style={[main.bottomB, main.verticalCenter, skStyles.header]}>
                <TouchableOpacity style={[main.btn, {marginLeft: 20}]} onPress={() => {this.props.toogleMenu()}}>
                    <Icon type="material-icons" name="arrow-drop-down" iconStyle={main.btnIcon} containerStyle={main.center}/>
                    <Text style={main.btnIcon}>{this.props.listName}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../../styles/skeletonStyles"));

export default Header;
