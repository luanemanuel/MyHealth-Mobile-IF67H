import {createDrawerNavigator} from "@react-navigation/drawer";
import Home from "../screens/home";
import NewVaccine from "../screens/newVaccine";
import EditVaccine from "../screens/editVaccine";
import NextVaccine from "../screens/nextVaccine";
import React from "react";

const Drawer = createDrawerNavigator();

function DrawerStack() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="NewVaccine" component={NewVaccine}/>
            <Drawer.Screen name="EditVaccine" component={EditVaccine}/>
            <Drawer.Screen name="NextScreen" component={NextVaccine}/>
        </Drawer.Navigator>
    );
}

export default DrawerStack;