import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import cc                                           from "cryptocompare";
import images from "../../utils/images.js"

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
         1000
       );
    }

    componentWillUnmount() {
       clearInterval(this.timerID);
    }

    render() {
        return (
            <View style={[skStyles.list, main.verticalCenter, main.bottomB]}>
                <View style={[main.rightB, main.center, {paddingLeft: 20, paddingRight: 20, flex: 1}]}>

                    <Image source={images[this.props.data.name]} style={{width: 25, height:25}} />
                    <Text>{this.props.data.name}</Text>
                </View>
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
