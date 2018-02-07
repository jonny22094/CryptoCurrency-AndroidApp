import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Icon }                                     from "react-native-elements";
import Header                                       from "./skeleton/Header.react";

class NewList extends Component {
    state = {

    }

    render() {
        return (
            <View style={main.container}>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../styles/skeletonStyles"));

export default NewList;
