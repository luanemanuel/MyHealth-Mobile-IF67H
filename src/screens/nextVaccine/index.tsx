import React from "react";
import {Container, Content} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";


function NextVaccine({navigation}) {

    return(
        <Container>
            <VaccineAppBar haveDrawer={true} haveReturn={false} text='Próximas vacinas' navigation={navigation}/>
            <Content>

            </Content>
        </Container>
    );
}

export default NextVaccine;