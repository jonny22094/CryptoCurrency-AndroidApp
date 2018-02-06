import { StackNavigator } from 'react-navigation';

import HomeScreen from "./components/HomeScreen.react";

const Routes = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: "Home"
});

export default Routes;
