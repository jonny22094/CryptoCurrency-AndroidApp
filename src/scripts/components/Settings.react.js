import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon }                                     from "react-native-elements";

class Settings extends Component {
    render() {
        return (
            <View style={main.container}>
                <View style={[main.rowContainer, {justifyContent: "space-between"}]}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon type="feather" name="arrow-left" iconStyle={[main.text, main.btn, main.btnText]}/>
                    </TouchableOpacity>
                </View>
                <View style={[main.contianer, main.center]}>
                    <View>
                        <Text>Theme Light/Dark</Text>
                    </View>
                    <View>
                        <Text>Show Icons</Text>
                    </View>
                    <View>
                        <Text>Comming soon</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));
const skeleton = StyleSheet.create(require("../../styles/skeletonStyles"));

export default Settings;
