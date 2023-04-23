import React, {useEffect} from "react";
import {
    Container,
    Content,
    EmailFieldView,
    EmailText,
    EmailTextField,
    RecoverButton, RecoverButtonText,
    RecoverButtonView, WrongMailText, WrongMailView
} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";
import {useAuth} from "../../contexts/AuthContext";

function LostPass({navigation}) {
    const [email, setEmail] = React.useState('');
    const [wrongMail, setWrongMail] = React.useState(false);
    const [disabledButton, setDisabledButton] = React.useState(true);

    // @ts-ignore
    const {recoverPassword} = useAuth();

    function validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    useEffect(() => {
        setWrongMail(!validateEmail(email) && email.length > 0);
        setDisabledButton(!validateEmail(email));
    });

    async function recover() {
        recoverPassword(email).then(() => {
            navigation.navigate('Start');
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <Container>
            <VaccineAppBar haveDrawer={false} text='MyHealth' navigation={navigation}/>
            <Content>
                <EmailFieldView>
                    <EmailText>E-mail</EmailText>
                    <EmailTextField
                        onChangeText={setEmail}
                        value={email}/>
                </EmailFieldView>
                {
                    wrongMail &&
                    <WrongMailView>
                        <WrongMailText>Email inválido</WrongMailText>
                    </WrongMailView>
                }
                <RecoverButtonView>
                    <RecoverButton disabled={disabledButton} onPress={recover}>
                        <RecoverButtonText>Recuperar senha</RecoverButtonText>
                    </RecoverButton>
                </RecoverButtonView>
            </Content>
        </Container>
    );
}

export default LostPass;