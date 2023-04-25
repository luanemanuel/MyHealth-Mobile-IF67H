import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import MainStack from "./src/stacks/MainStack";
import {AuthProvider} from "./src/contexts/AuthContext";
import 'react-native-gesture-handler';
import {VaccineProvider} from "./src/contexts/VaccineContext";

export default () => {
    return (
        <AuthProvider>
            <VaccineProvider>
                <NavigationContainer>
                    <MainStack/>
                </NavigationContainer>
            </VaccineProvider>
        </AuthProvider>
    );
}