import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Start from "../screens/start";
import CreateAccount from "../screens/createAccount";
import LostPass from "../screens/lostPass";
import Home from "../screens/home";
import NewVaccine from "../screens/newVaccine";
import EditVaccine from "../screens/editVaccine";
import NextVaccine from "../screens/nextVaccine";

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
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="NewVaccine" component={NewVaccine}/>
            <Stack.Screen name="EditVaccine" component={EditVaccine}/>
            <Stack.Screen name="NextScreen" component={NextVaccine}/>
        </Stack.Navigator>
    );
}

export default MainStack