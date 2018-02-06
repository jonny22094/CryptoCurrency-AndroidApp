import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import cc                                           from "cryptocompare";
import Header                                       from "./skeleton/Header.react";
import List                                         from "./skeleton/List.react";

class HomeScreen extends Component {
    state = {
        listName: "top10",
        listArray: [
            {
                name: "BTC",
                curr: "PLN"
            },
            {
                name: "ETH",
                curr: "PLN"
            }
        ],
        prices: []
    }

    async cryptoPrice(data) {
        const price = await cc.priceFull(data.name, data.curr);

        console.log(price);


        let state = [];
        state.push({name: data.name, price: price[data.name][data.curr].PRICE});

        this.setState({prices: state});

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {

        }
    }

    render() {
        this.state.listArray.map((data) => {this.cryptoPrice(data)});
        return (
            <View style={main.container}>
                <Header/>
                <ScrollView style={main.container}>
                {
                    this.state.prices.map((data, key) => {return( <List key={key} name={data.name} value={data.price}/> )})
                }
                    <List name={"BTC"} value={30}/>
                    <List name={"BTC"} value={30}/>
                    <List name={"BTC"} value={30}/>
                </ScrollView>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));

export default HomeScreen;
