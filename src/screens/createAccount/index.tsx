import React, {useState, useEffect, useRef} from "react";
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
    RegisterButtonView, WrongEmailText, WrongEmailView,
    WrongPassText,
    WrongPassView
} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import moment from "moment";
import DatePicker from "react-native-date-picker";

import {useAuth} from "../../contexts/AuthContext";

import Calendar from "../../assets/calendar.svg";

function CreateAccount({navigation}) {
    const [openPicker, setOpenPicker] = useState(false);
    const [passError, setPassError] = useState(false);
    const [name, setName] = useState('');
    const [gender, setGender] = useState<String | null>(null);
    const [date, setDate] = useState(new Date());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPass] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [alreadyRegisterError, setAlreadyRegisterError] = useState(false);
    const [wrongEmailError, setWrongEmailError] = useState(false);

    const passRef = useRef<any>();
    const confirmPassRef = useRef<any>();

    // @ts-ignore
    const {signUp} = useAuth();

    useEffect(() => {
        setWrongEmailError(!validateEmail(email) && email.length > 0);
        const buttonStatus = name.length > 0 && gender != null && date != new Date() && validateEmail(email) && validatePassword(password) && password === confirmPassword;
        setPassError(password !== confirmPassword);
        setButtonDisabled(!buttonStatus);
    });

    function validateEmail(email) {
        const emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function trySignUp() {
        setAlreadyRegisterError(false);
        signUp(name, gender, date, email, password).then(() => {
            navigation.navigate("Start");
        }).catch(e => {
            // @ts-ignore
            if (e.code === 'auth/email-already-in-use') {
                setAlreadyRegisterError(true);
            }
            console.log(e);
        });
    }

    return (
        <Container>
            <VaccineAppBar haveDrawer={false} haveReturn={true} text="Nova Conta" navigation={navigation}/>
            <Content>
                <NameFieldView>
                    <NameText>Nome Completo</NameText>
                    <NameTextField
                        onChangeText={setName}
                        value={name}/>
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
                                    style={{paddingLeft: 15}}
                                    isChecked={gender === "male"}
                                    disableBuiltInState
                                    onPress={() => setGender("male")}/>
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
                                    style={{paddingLeft: 15}}
                                    isChecked={gender === "female"}
                                    disableBuiltInState
                                    onPress={() => setGender("female")}/>
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
                            }} mode="date"/>
                        </DateButton>
                    </DateField>
                </DateFieldView>
                <EmailFieldView>
                    <EmailText>E-mail</EmailText>
                    <EmailTextField
                        onChangeText={setEmail}
                        value={email}
                        onSubmitEditing={() => passRef.current.focus()}
                        blurOnSubmit={false}/>
                </EmailFieldView>
                {
                    wrongEmailError &&
                    <WrongEmailView>
                        <WrongEmailText>Email inválido!</WrongEmailText>
                    </WrongEmailView>
                }
                <PassFieldView>
                    <PassText>Senha</PassText>
                    <PassTextField
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        value={password}
                        onSubmitEditing={() => confirmPassRef.current.focus()}
                        blurOnSubmit={false}
                        ref={passRef}/>
                </PassFieldView>
                <ConfirmFieldView>
                    <ConfirmText>Repetir senha</ConfirmText>
                    <ConfirmTextField
                        secureTextEntry={true}
                        onChangeText={setConfirmPass}
                        value={confirmPassword}
                        ref={confirmPassRef}/>
                </ConfirmFieldView>
                {passError &&
                    <WrongPassView>
                        <WrongPassText>Senha não confere!</WrongPassText>
                    </WrongPassView>
                }
                {alreadyRegisterError &&
                    <WrongPassView>
                        <WrongPassText>Email já cadastrado!</WrongPassText>
                    </WrongPassView>
                }
                <RegisterButtonView>
                    <RegisterButton disabled={buttonDisabled}
                                    style={{opacity: buttonDisabled ? 0.5 : 1}}
                                    onPress={trySignUp}>
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