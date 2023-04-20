import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Start from "../screens/start";

const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator
            initialRouteName="Start"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Start" component={Start}/>
        </Stack.Navigator>
    );
}

export default MainStack