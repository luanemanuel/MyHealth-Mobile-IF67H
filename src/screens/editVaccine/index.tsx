import React from "react";
import {Container, Content} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";


function EditVaccine({navigation}) {

    return(
        <Container>
            <VaccineAppBar haveDrawer={false} haveReturn={true} text='Editar vacina' navigation={navigation}/>
            <Content>

            </Content>
        </Container>
    );
}

export default EditVaccine;