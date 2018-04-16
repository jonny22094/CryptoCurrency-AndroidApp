import React, { Component }                         from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Icon }                                     from "react-native-elements";
import cc                                           from "cryptocompare";
import images                                       from "../../utils/images.js"

class List extends Component {
  state = {
    isOpen: false,
    color: this.props.data.CHANGEPCT24HOUR.toFixed(2) > 0 ? {color: "#299C2A"} : {color: "#DE4E4D"}
  }

  render() {
    const theme = this.props.theme;
    const listInfo = this.state.isOpen ? {display: "flex"} : {display: "none"};

    return (
      <View>
        <TouchableOpacity style={[theme.border, main.bottomB, skeleton.list, main.verticalCenter]}
          onPress={() => {this.setState({isOpen: this.state.isOpen ? false : true })}}
        >
        <View style={[theme.border, main.rightB, main.center, {paddingLeft: 20, paddingRight: 20, flex: 1}]}>
          <Image
            source={images[this.props.data.FROMSYMBOL]}
            style={[main.image]}
          />
            <Text style={theme.text}>
              {this.props.data.FROMSYMBOL}
            </Text>
        </View>
        <Text style={[theme.text, main.text, {flex: 3}]}>
          {this.props.data.PRICE}
          <Text style={{fontSize: 12}}>
            {this.props.data.TOSYMBOL}
          </Text>
        </Text>
        <View style={[main.container, main.center, {flex: 2, flexDirection: "column"}]}>
          <Text style={this.state.color}>
            {this.props.data.CHANGEPCT24HOUR.toFixed(2)}%
          </Text>
        </View>
        </TouchableOpacity>
          <View style={[theme.border, main.bottomB, skeleton.listInfo, main.rowContainer, main.verticalCenter, listInfo]}>
          <View style={[main.container, main.center]}>
            <Text style={[theme.text, {fontSize: 12}]}>
              Highest (24h)  {this.props.data.HIGH24HOUR}
            </Text>
            <Text style={[theme.text, {fontSize: 12}]}>
              Lowest (24h)  {this.props.data.LOW24HOUR}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

//<Icon type="material-icons" name="keyboard-arrow-up" iconStyle={main.btnIcon}/>
//<Icon type="material-icons" name="keyboard-arrow-down" iconStyle={main.btnIcon}/>

const main = StyleSheet.create(require("../../../styles/Arrangement"));
const skeleton = StyleSheet.create(require("../../../styles/skeletonStyles"));

export default List;
