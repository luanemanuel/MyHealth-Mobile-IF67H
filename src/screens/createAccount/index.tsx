import React, {useState, useEffect} from "react";
import {Container} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";

function CreateAccount() {
    return (
        <Container>
            <VaccineAppBar haveDrawer={false} text="My Health"/>
        </Container>
    );
}

export default CreateAccount;