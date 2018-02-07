import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Picker, ScrollView } from "react-native";
import { Icon }                                     from "react-native-elements";
import storage                                      from "../utils/storage";

class NewList extends Component {
    state = {
        title: "",
        crypto: "BTC",
        curren: "USD",
        list: []
    }

    AddCurre = () => {
        let data = this.state.list;
        data.push({
            name: this.state.crypto,
            curr: this.state.curren
        });

        this.setState({
            list: data
        });
    }

    deleteItem = i => {
        let data = this.state.list;
        data.splice(i, 1);

        this.setState({
            list: data
        });
    }

    saveList = () => {
        storage.load("lists").then(data => {
            let lists = JSON.parse(data) || [];
            lists.push(this.state.title);
            storage.save("lists", JSON.stringify(lists));
        });
        storage.save(this.state.title, JSON.stringify(this.state.list));
        storage.save("listName", this.state.title);

        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={main.container}>
                <View style={[main.btn, {justifyContent: "space-between"}]}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon type="feather" name="arrow-left" iconStyle={[main.btnIcon, main.text, {fontSize: 25, marginRight: 20}]}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.saveList()}>
                        <Icon type="font-awesome" name="save" iconStyle={[main.btnIcon, main.text, {fontSize: 25, marginRight: 20}]}/>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={skStyles.input}
                    textAlign={'center'}
                    placeholder="Name"
                    onChangeText={text => this.setState({title: text})}
                    value={this.state.title}
                />
                <View style={[main.btn, main.center]}>
                    <Picker
                        style={skStyles.picker}
                        selectedValue={this.state.crypto}
                        onValueChange={itemValue => this.setState({crypto: itemValue})}>
                        <Picker.Item label="BTC" value="BTC" />
                        <Picker.Item label="ETH" value="ETH" />
                        <Picker.Item label="LSK" value="LSK" />
                        <Picker.Item label="LTC" value="LTC" />
                        <Picker.Item label="BCC" value="BCC" />
                        <Picker.Item label="BTG" value="BTG" />
                    </Picker>
                    <Picker
                        style={skStyles.picker}
                        selectedValue={this.state.curren}
                        onValueChange={itemValue => this.setState({curren: itemValue})}>
                        <Picker.Item label="USD" value="USD" />
                        <Picker.Item label="EUR" value="EUR" />
                        <Picker.Item label="PLN" value="PLN" />
                    </Picker>
                    <TouchableOpacity style={main.picker} onPress={() => this.AddCurre()}>
                        <Text style={[main.text, main.border, {fontSize: 18}]}>ADD</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={[main.contianer, main.topB, {marginTop: 20}]}>
                    {this.state.list.map((data, key) => { return(
                        <View key={key} style={[skStyles.list, main.bottomB]}>
                            <Text style={skStyles.listName}>{key+1}.</Text>
                            <Text style={skStyles.listName}>{data.name}</Text>
                            <Text style={skStyles.listName}>{data.curr}</Text>
                            <TouchableOpacity style={skStyles.list} onPress={() => {this.deleteItem(key)}}>
                                <Icon type="font-awesome" name="trash" iconStyle={[main.btnIcon, main.text, {fontSize: 25, marginRight: 20}]}/>
                            </TouchableOpacity>
                        </View>
                    );})}
                </ScrollView>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../styles/skeletonStyles"));

export default NewList;
