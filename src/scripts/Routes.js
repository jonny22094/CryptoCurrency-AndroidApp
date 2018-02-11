import { StackNavigator } from 'react-navigation';

import HomeScreen from "./components/HomeScreen.react";
import NewList from "./components/NewList.react";
import Settings from "./components/Settings.react";

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
    navigationOptions: {
        header: null,
    }
});

export default Routes;
