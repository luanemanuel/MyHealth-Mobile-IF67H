import React, {useState, useEffect} from "react";
import {AppBarText, MyAppBar, ReturnButton} from "./styles";

import Vaccine from "../../assets/icon-vaccine.svg";
import Hamburguer from "../../assets/hamburgerIcon.svg";
import Return from "../../assets/return_icon.svg";
import {TouchableOpacity} from "react-native";

function VaccineAppBar({haveDrawer, haveReturn, text, navigation}) {
    return (
        <MyAppBar>
            {!haveDrawer && !haveReturn && <Vaccine height={40}/>}
            {haveDrawer &&
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Hamburguer height={20}/>
                </TouchableOpacity>
            }
            {
                haveReturn &&
                <ReturnButton onPress={() => navigation.goBack()}>
                    <Return height={35}/>
                </ReturnButton>
            }
            <AppBarText>{text}</AppBarText>
        </MyAppBar>
    );
}

export default VaccineAppBar;