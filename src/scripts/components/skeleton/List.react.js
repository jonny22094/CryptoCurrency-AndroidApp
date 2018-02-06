import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class List extends Component {
    render() {
        return (
            <View style={main.container}>
                <Text>List</Text>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../../styles/Arrangement"));

export default List;
