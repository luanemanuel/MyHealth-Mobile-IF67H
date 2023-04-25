import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Start from "../screens/start";
import CreateAccount from "../screens/createAccount";
import LostPass from "../screens/lostPass";
import DrawerStack from "./DrawerStack";
import NewVaccine from "../screens/newVaccine";
import EditVaccine from "../screens/editVaccine";

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
            <Stack.Screen name="NewVaccine" component={NewVaccine}/>
            <Stack.Screen name="EditVaccine" component={EditVaccine}/>
        </Stack.Navigator>
    );
}

export default MainStack