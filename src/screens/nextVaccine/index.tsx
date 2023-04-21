import React from "react";
import {Container, Content} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";


function NextVaccine({navigation}) {

    return(
        <Container>
            <VaccineAppBar haveDrawer={true} text='Próximas vacinas'/>
            <Content>

            </Content>
        </Container>
    );
}

export default NextVaccine;