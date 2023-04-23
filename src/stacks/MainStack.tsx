import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Start from "../screens/start";
import CreateAccount from "../screens/createAccount";
import LostPass from "../screens/lostPass";
import DrawerStack from "./DrawerStack";

const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator
            initialRouteName="Start"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Start" component={Start}/>
            <Stack.Screen name="CreateAccount" component={CreateAccount}/>
            <Stack.Screen name="LostPass" component={LostPass}/>
            <Stack.Screen name="DrawerStack" component={DrawerStack}/>
        </Stack.Navigator>
    );
}

export default MainStack