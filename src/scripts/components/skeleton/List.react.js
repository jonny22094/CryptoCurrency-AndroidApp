import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import cc                                           from "cryptocompare";

class List extends Component {

    state = {
        name:  "",
        price: "Loading..."
    }

    async cryptoPrice() {
        const data = await cc.priceFull(this.props.data.name, this.props.data.curr);

        let state = {
            name: data[this.props.data.name][this.props.data.curr].TOSYMBOL,
            price: data[this.props.data.name][this.props.data.curr].PRICE
        }

        this.setState(state);
    }

    componentDidMount() {
       this.timerID = setInterval(
         () => this.cryptoPrice(),
         500
       );
    }

    componentWillUnmount() {
       clearInterval(this.timerID);
    }

    render() {
        return (
            <View style={[skStyles.list, main.verticalCenter, main.bottomB]}>
                <Text style={[main.text, main.rightB, skStyles.listName]}>{this.props.data.name}</Text>
                <Text style={[main.text, {flex: 6}]}>
                    {this.state.price}
                    <Text style={{fontSize: 12}}>  {this.state.name}</Text>
                </Text>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../../styles/skeletonStyles"));

export default List;
