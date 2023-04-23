import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import MainStack from "./src/stacks/MainStack";
import {AuthProvider} from "./src/contexts/AuthContext";
import 'react-native-gesture-handler';

export default () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                <MainStack/>
            </NavigationContainer>
        </AuthProvider>
    );
}