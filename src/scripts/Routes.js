import { StackNavigator } from 'react-navigation';

import HomeScreen from "./components/HomeScreen.react";
import NewList from "./components/NewList.react";
import Settings from "./components/Settings.react";

import theme from "../styles/themes/LightColors";

const Routes = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  NewList: {
    screen: NewList,
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
    visible: true
    }
  }
}, {
  initialRouteName: "Home",
  initialRouteParams: {"theme": theme},
  navigationOptions: {
    header: null,
  }
});

export default Routes;
