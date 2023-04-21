import React from "react";
import {Container, Content} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";


function NewVaccine({navigation}) {

    return(
        <Container>
            <VaccineAppBar haveDrawer={true} text='Minhas vacinas'/>
            <Content>

            </Content>
        </Container>
    );
}

export default NewVaccine;