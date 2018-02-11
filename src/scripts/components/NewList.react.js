import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Picker, ScrollView } from "react-native";
import { Icon }                                     from "react-native-elements";
import storage                                      from "../utils/storage";
import cryptoCurrency                               from "../utils/cryptocurrency.js"

class NewList extends Component {
    state = {
        perviousName: "",
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

    deleteList = (name, bool) => {
        storage.load("lists").then(data => {
            let lists = JSON.parse(data);

            const index = lists.indexOf(name);
            if(index > -1) lists.splice(index, 1);

            if(bool) lists.push(this.state.title);
            else     storage.save("listName", lists[0] || "Default");

            storage.save("lists", JSON.stringify(lists));
            storage.remove(name);
        });

        if(!bool) {
            storage.save("listName", this.state.title);
            this.props.navigation.goBack();
        }
    }

    saveList = () => {
        if(this.state.title !== "" ) {
            if(this.state.perviousName !== this.state.title) {
                this.deleteList(this.state.perviousName, true)
            }


            storage.save(this.state.title, JSON.stringify(this.state.list));
            storage.save("listName", this.state.title);

            this.props.navigation.goBack();
        }
        else alert("Enter the list name");
    }

    componentDidMount() {
        if(this.props.navigation.state.params.listName) {
            storage.load(this.props.navigation.state.params.listName).then(data => {
                this.setState({
                    perviousName: this.props.navigation.state.params.listName,
                    title: this.props.navigation.state.params.listName,
                    list: JSON.parse(data) || []
                })
            })
        }
    }

    render() {
        return (
            <View style={main.container}>
                <View style={[main.rowContainer, {justifyContent: "space-between"}]}>
                    <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                        <Icon type="feather" name="arrow-left" iconStyle={[main.text, main.btn, main.btnText]}/>
                    </TouchableOpacity>
                    <View style={main.rowContainer}>
                        <TouchableOpacity onPress={() => this.deleteList(this.state.title, false)}>
                            <Icon type="font-awesome" name="trash" iconStyle={[main.text, main.btn, main.btnText]}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.saveList()}>
                            <Icon type="font-awesome" name="save" iconStyle={[main.text, main.btn, main.btnText]}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TextInput
                    style={skStyles.input}
                    textAlign={'center'}
                    placeholder="Name"
                    onChangeText={text => {this.setState({title: text})}}
                    value={this.state.title}
                />
                <View style={[main.rowContainer, main.center]}>
                    <Picker
                        style={skStyles.picker}
                        selectedValue={this.state.crypto}
                        onValueChange={itemValue => {this.setState({crypto: itemValue})}}>
                        {cryptoCurrency.map((data, key) => <Picker.Item key={key} label={data} value={data} />)}
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
                        <Text style={[main.text, main.btnIcon, main.border, {borderRadius: 3}]}>ADD</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={[main.contianer, main.topB, {marginTop: 20}]}>
                    {this.state.list.map((data, key) => { return(
                        <View key={key} style={[skStyles.list, main.bottomB]}>
                            <Text style={skStyles.listName}>{key+1}.</Text>
                            <Text style={skStyles.listName}>{data.name}</Text>
                            <Text style={skStyles.listName}>{data.curr}</Text>
                            <TouchableOpacity style={skStyles.list} onPress={() => {this.deleteItem(key)}}>
                                <Icon type="font-awesome" name="trash" iconStyle={[main.btnIcon, main.btn, main.text ,main.btnText]}/>
                            </TouchableOpacity>
                        </View>
                    )})}
                </ScrollView>
            </View>
        );
    }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));
const skStyles = StyleSheet.create(require("../../styles/skeletonStyles"));

export default NewList;
