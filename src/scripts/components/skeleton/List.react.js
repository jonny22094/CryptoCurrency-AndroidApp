import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import cc                                           from "cryptocompare";

class List extends Component {

    state = {
        price: "Loading..."
    }

    async cryptoPrice() {
        const data = await cc.priceFull(this.props.data.name, this.props.data.curr);

        let state = {
            price: data[this.props.data.name][this.props.data.curr].PRICE
        }

        this.setState(state);
    }


    render() {
        this.cryptoPrice();
        return (
            <View style={[skStyles.list, main.verticalCenter, main.bottomB]}>
                <Text style={[main.text, main.rightB, skStyles.listName]}>{this.props.data.name}</Text>
                <Text style={[main.text, {flex: 6}]}>
                    {this.state.price}
                    <Text style={{fontSize: 12}}>{this.props.data.curr}</Text>
                </Text>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../../styles/skeletonStyles"));

export default List;
