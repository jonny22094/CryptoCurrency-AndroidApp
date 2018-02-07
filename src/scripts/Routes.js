import { StackNavigator } from 'react-navigation';

import HomeScreen from "./components/HomeScreen.react";
import NewList from "./components/NewList.react";

const Routes = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    NewList: {
        screen: NewList
    }

}, {
    initialRouteName: "Home",
    navigationOptions: {
        header: null,
    }
});

export default Routes;
