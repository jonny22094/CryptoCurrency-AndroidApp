import { StackNavigator } from 'react-navigation';

import HomeScreen from "./components/HomeScreen.react";
import NewList from "./components/NewList.react";

const Routes = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    NewList: {
        screen: NewList
    }

}, {
    initialRouteName: "Home",
    navigationOptions: {
            headerStyle: {
                   elevation: 0
           }
       }
});

export default Routes;
