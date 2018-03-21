import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Icon }                                     from "react-native-elements";
import cc                                           from "cryptocompare";
import images                                       from "../../utils/images.js"

class List extends Component {

    state = {
        name:  "",
        isOpen: false,
        price: "Loading...",
        change24hour: 0,
        low24hour: 0,
        high24hour: 0,
        color: ""
    }

    async cryptoPrice() {
        const data = await cc.priceFull(this.props.data.name, this.props.data.curr);

        console.log(data);

        this.setState({
            name: data[this.props.data.name][this.props.data.curr].TOSYMBOL,
            price: data[this.props.data.name][this.props.data.curr].PRICE,
            low24hour: data[this.props.data.name][this.props.data.curr].LOW24HOUR,
            high24hour: data[this.props.data.name][this.props.data.curr].HIGH24HOUR,
            change24hour: data[this.props.data.name][this.props.data.curr].CHANGEPCT24HOUR.toFixed(2),
            color: data[this.props.data.name][this.props.data.curr].CHANGEPCT24HOUR.toFixed(2) > 0 ? {color: "#299C2A"} : {color: "#DE4E4D"}
        });
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
        const listInfo = this.state.isOpen ? {display: "flex"} : {display: "none"};

        return (
            <View>
                <TouchableOpacity style={[skStyles.list, main.verticalCenter, main.bottomB]}
                    onPress={() => { this.setState({isOpen: this.state.isOpen ? false : true }) }}
                >
                    <View style={[main.rightB, main.center, {paddingLeft: 20, paddingRight: 20, flex: 1}]}>
                        <Image source={images[this.props.data.name]} style={main.image} />
                        <Text>{this.props.data.name}</Text>
                    </View>
                    <Text style={[main.text, {flex: 3}]}>
                        {this.state.price}
                        <Text style={{fontSize: 12}}>  {this.state.name}</Text>
                    </Text>
                    <View style={[main.container, main.center, {flex: 2, flexDirection: "column"}]}>
                        <Text style={this.state.color}>{this.state.change24hour}%</Text>
                    </View>
                </TouchableOpacity>
                <View style={[skStyles.listInfo, main.rowContainer, main.verticalCenter, main.bottomB, listInfo]}>
                    <View style={[main.container, main.center]}>
                        <Text style={{fontSize: 12}}>Highest (24h)  {this.state.high24hour}</Text>
                        <Text style={{fontSize: 12}}>Lowest (24h)  {this.state.low24hour}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

//<Icon type="material-icons" name="keyboard-arrow-up" iconStyle={main.btnIcon}/>
//<Icon type="material-icons" name="keyboard-arrow-down" iconStyle={main.btnIcon}/>

const main = StyleSheet.create(require("../../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../../styles/skeletonStyles"));

export default List;
