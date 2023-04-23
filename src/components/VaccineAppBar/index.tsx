import React, {useState, useEffect} from "react";
import {AppBarText, MyAppBar} from "./styles";

import Vaccine from "../../assets/icon-vaccine.svg";
import Hamburguer from "../../assets/hamburgerIcon.svg";
import {TouchableOpacity} from "react-native";

function VaccineAppBar({haveDrawer, text, navigation}) {
    return (
        <MyAppBar>
            {!haveDrawer && <Vaccine height={40}/>}
            {haveDrawer &&
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Hamburguer height={20}/>
                </TouchableOpacity>
            }
            <AppBarText>{text}</AppBarText>
        </MyAppBar>
    );
}

export default VaccineAppBar;