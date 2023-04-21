import React from "react";
import {Container, Content} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";


function EditVaccine({navigation}) {

    return(
        <Container>
            <VaccineAppBar haveDrawer={true} text='Minhas vacinas'/>
            <Content>

            </Content>
        </Container>
    );
}

export default EditVaccine;