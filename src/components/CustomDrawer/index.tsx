import React, {useState, useEffect} from "react";
import {DrawerContentScrollView} from "@react-navigation/drawer";
import {Container, DrawerButton, DrawerButtonView, DrawerDividier, DrawerText, TitleDrawerView} from "./styles";

import Vaccine from "../../assets/icon-vaccine.svg";
import Calendar from "../../assets/calendar-2.svg";
import Logout from "../../assets/logout.svg";
import {useAuth} from "../../contexts/AuthContext";

function CustomDrawer({navigation}) {
    // @ts-ignore
    const {signOut} = useAuth();

    async function logout() {
        try {
            await signOut();
            navigation.replace("Start");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Container>
            <TitleDrawerView>
                <DrawerText>Olá Jurandir!</DrawerText>
                <DrawerDividier/>
            </TitleDrawerView>
            <DrawerButtonView>
                <DrawerButton onPress={() => navigation.navigate("Home")}>
                    <Vaccine width={30} height={30}/>
                    <DrawerText style={{marginLeft: 10}}>Minhas vacinas</DrawerText>
                </DrawerButton>
            </DrawerButtonView>
            <DrawerButtonView>
                <DrawerButton onPress={() => navigation.navigate("NextVaccine")}>
                    <Calendar width={30} height={30}/>
                    <DrawerText style={{marginLeft: 10}}>Próximas vacinas</DrawerText>
                </DrawerButton>
            </DrawerButtonView>
            <DrawerButtonView>
                <DrawerButton onPress={logout}>
                    <Logout width={30} height={30}/>
                    <DrawerText style={{marginLeft: 10}}>Sair</DrawerText>
                </DrawerButton>
            </DrawerButtonView>
        </Container>
    );
}

export default CustomDrawer;