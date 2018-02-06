import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

async function request(currencies) {
    try {
        let currencies = await fetch("https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=pln")
            .then((data) => {return data.json()});

        console.log(currencies[0]);
    } catch (error) {
        console.log(error);
    }
}

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>ok</Text>
            </View>
        );
    }
}


export default HomeScreen;
