import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class List extends Component {
    render() {
        return (
            <View style={[skStyles.list, main.verticalCenter, main.bottomB]}>
                <Text style={[main.text, main.rightB, skStyles.listName]}>{this.props.name}</Text>
                <Text style={[main.text, {flex: 6}]}>{this.props.value}</Text>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../../styles/skeletonStyles"));

export default List;
