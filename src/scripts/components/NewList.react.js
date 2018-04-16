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
    this.setState({
      list: this.state.list.concat({
        name: this.state.crypto,
        curr: this.state.curren
      })
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
    const theme = this.props.navigation.state.params.theme;
    return (
      <View style={[theme.container, main.container]}>
        <View style={[main.rowContainer, {justifyContent: "space-between"}]}>
          <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
            <Icon
              type="feather"
              name="arrow-left"
              iconStyle={[theme.text, main.text, main.btn, main.btnText]}
            />
          </TouchableOpacity>
          <View style={main.rowContainer}>
            <TouchableOpacity onPress={() => this.deleteList(this.state.title, false)}>
              <Icon
                type="font-awesome"
                name="trash"
                iconStyle={[theme.text, main.text, main.btn, main.btnText]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.saveList()}>
              <Icon
                type="font-awesome"
                name="save"
                iconStyle={[theme.text, main.text, main.btn, main.btnText]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={[theme.text, skeleton.input]}
          textAlign={'center'}
          placeholder="List name"
          onChangeText={text => {this.setState({title: text})}}
          value={this.state.title}
        />
        <View style={[main.rowContainer, main.center]}>
          <Picker
            style={[theme.text, skeleton.picker]}
            selectedValue={this.state.crypto}
            onValueChange={itemValue => {this.setState({crypto: itemValue})}}>
            {cryptoCurrency.map((data, key) => <Picker.Item key={key} label={data} value={data} />)}
          </Picker>
          <Picker
            style={[theme.text, skeleton.picker]}
            selectedValue={this.state.curren}
            onValueChange={itemValue => this.setState({curren: itemValue})}>
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="PLN" value="PLN" />
            <Picker.Item label="BTC" value="BTC" />
          </Picker>
          <TouchableOpacity onPress={() => this.AddCurre()}>
            <Text style={[theme.text, theme.border, main.border, main.text, main.btnIcon, {borderRadius: 3}]}>
              ADD
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={[theme.border, main.contianer, main.topB, {marginTop: 20}]}>
          {this.state.list.map((data, key) =>
            <View key={key} style={[theme.border, main.bottomB, skeleton.list]}>
              <Text style={[theme.text, skeleton.listName]}>{key+1}.</Text>
              <Text style={[theme.text, skeleton.listName]}>{data.name}</Text>
              <Text style={[theme.text, skeleton.listName]}>{data.curr}</Text>
              <TouchableOpacity style={skeleton.list} onPress={() => {this.deleteItem(key)}}>
                <Icon
                  type="font-awesome"
                  name="trash"
                  iconStyle={[theme.text, main.btnIcon, main.btn, main.text ,main.btnText]}
                />
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const main = StyleSheet.create(require("../../styles/Arrangement"));
const skeleton = StyleSheet.create(require("../../styles/skeletonStyles"));

export default NewList;
