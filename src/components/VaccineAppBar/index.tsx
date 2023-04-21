import React, {useState, useEffect} from "react";
import {AppBarText, MyAppBar} from "./styles";

import Vaccine from "../../assets/icon-vaccine.svg";
import Hamburguer from "../../assets/hamburgerIcon.svg";

function VaccineAppBar({haveDrawer, text}) {
    return (
        <MyAppBar>
            {!haveDrawer && <Vaccine height={40}/>}
            {haveDrawer && <Hamburguer height={20}/>}
            <AppBarText>{text}</AppBarText>
        </MyAppBar>
    );
}

export default VaccineAppBar;