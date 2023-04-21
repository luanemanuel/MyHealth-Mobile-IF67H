import React, {useState, useEffect} from "react";
import {
    ConfirmFieldView,
    ConfirmText,
    ConfirmTextField,
    Container,
    Content,
    DateButton,
    DateField,
    DateFieldView,
    DateText,
    DateTextContent,
    EmailFieldView,
    EmailText,
    EmailTextField,
    GenderFieldView,
    GenderText,
    NameFieldView,
    NameText,
    NameTextField,
    PassFieldView,
    PassText,
    PassTextField,
    RegisterButton, RegisterButtonText,
    RegisterButtonView,
    WrongPassText,
    WrongPassView
} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import moment from "moment";

import Calendar from "../../assets/calendar.svg";
import DatePicker from "react-native-date-picker";

function CreateAccount() {
    const [date, setDate] = useState(new Date());
    const [openPicker, setOpenPicker] = useState(false);

    return (
        <Container>
            <VaccineAppBar haveDrawer={false} text="My Health"/>
            <Content>
                <NameFieldView>
                    <NameText>Nome Completo</NameText>
                    <NameTextField/>
                </NameFieldView>
                <GenderFieldView>
                    <GenderText>Sexo</GenderText>
                    <BouncyCheckbox size={24}
                                    unfillColor="#fff"
                                    fillColor="#419ED7"
                                    innerIconStyle={{
                                        borderColor: "#fff",
                                        borderWidth: 3,
                                        borderStyle: 'solid',
                                    }}
                                    iconImageStyle={{opacity: 0}}
                                    style={{paddingLeft: 15}}/>
                    <GenderText>Masculino</GenderText>
                    <BouncyCheckbox size={24}
                                    unfillColor="#fff"
                                    fillColor="#419ED7"
                                    innerIconStyle={{
                                        borderColor: "#fff",
                                        borderWidth: 3,
                                        borderStyle: 'solid',
                                    }}
                                    iconImageStyle={{opacity: 0}}
                                    style={{paddingLeft: 15}}/>
                    <GenderText>Feminino</GenderText>
                </GenderFieldView>
                <DateFieldView>
                    <DateText>Data nascimento</DateText>
                    <DateField>
                        <DateButton onPress={() => setOpenPicker(true)}>
                            <DateTextContent>{moment(date).format('DD/MM/YYYY')}</DateTextContent>
                            <Calendar height={20} width={20} style={{paddingRight: 30}}/>
                            <DatePicker modal
                                        date={date}
                                        open={openPicker}
                                        onConfirm={(date) => {
                                            setOpenPicker(false)
                                            console.log(date)
                                            setDate(date)
                                        }} onCancel={() => {
                                setOpenPicker(false)
                            }} mode="date" />
                        </DateButton>
                    </DateField>
                </DateFieldView>
                <EmailFieldView>
                    <EmailText>E-mail</EmailText>
                    <EmailTextField/>
                </EmailFieldView>
                <PassFieldView>
                    <PassText>Senha</PassText>
                    <PassTextField/>
                </PassFieldView>
                <ConfirmFieldView>
                    <ConfirmText>Repetir senha</ConfirmText>
                    <ConfirmTextField/>
                </ConfirmFieldView>
                <WrongPassView>
                    <WrongPassText>Senha não confere!</WrongPassText>
                </WrongPassView>
                <RegisterButtonView>
                    <RegisterButton>
                        <RegisterButtonText>
                            Cadastrar
                        </RegisterButtonText>
                    </RegisterButton>
                </RegisterButtonView>
            </Content>
        </Container>
    );
}

export default CreateAccount;