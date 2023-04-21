import React from "react";
import {Container, Content} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";


function LostPass({navigation}) {

    return(
        <Container>
            <VaccineAppBar haveDrawer={false} text='MyHealth'/>
            <Content>
                
            </Content>
        </Container>
    );
}

export default LostPass;