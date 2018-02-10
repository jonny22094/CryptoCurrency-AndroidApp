import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon }                                     from "react-native-elements";

class Header extends Component {
    render() {
        return (
            <View style={[main.bottomB, main.verticalCenter, skStyles.header, {justifyContent: "space-between"}]}>
                <TouchableOpacity style={[main.rowContainer, main.btn]} onPress={() => this.props.toogleMenu()}>
                    <Icon type="material-icons" name="arrow-drop-down" iconStyle={main.btnIcon} containerStyle={main.center}/>
                    <Text style={main.btnIcon}>{this.props.listName}</Text>
                </TouchableOpacity>
                <View style={main.rowContainer}>
                    <TouchableOpacity style={[main.rowContainer, main.btn]} onPress={() => this.props.toogleMenu()}>
                        <Icon type="material-icons" name="edit" iconStyle={[main.btnIcon, main.btnText]} containerStyle={main.center}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[main.rowContainer, main.btn]} onPress={() => this.props.toogleMenu()}>
                        <Icon type="material-icons" name="settings" iconStyle={[main.btnIcon, main.btnText]} containerStyle={main.center}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../../styles/skeletonStyles"));

export default Header;
