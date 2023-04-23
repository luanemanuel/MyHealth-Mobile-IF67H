import React, {useState, useEffect, useRef} from "react";
import {
    Container,
    TitleText,
    TitleView,
    Subtitle,
    SubtitleView,
    EmailFieldView,
    EmailText,
    EmailTextField,
    PasswordTextField,
    PasswordFieldView,
    PasswordText,
    WrongPassView,
    WrongPassText,
    LoginButtonView,
    LoginButton,
    LoginButtonText,
    RegisterButtonView,
    RegisterButton,
    RegisterButtonText, ForgotButtonView, ForgotButton, ForgotButtonText, ImageContainer, StartView
} from "./styles";
import LinearGradient from "react-native-linear-gradient";
import {useAuth} from "../../contexts/AuthContext";

import Vaccine from "../../assets/icon-vaccine.svg";

function Start({navigation}) {
    const [loginError, setLoginError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const passRef = useRef<any>();

    // @ts-ignore
    const {signIn} = useAuth();

    useEffect(() => {
        setButtonDisabled(!(validateEmail(email) && password.length > 0));
    });

    function validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    async function tryLogin() {
        try {
            await signIn(email, password);
            navigation.replace("DrawerStack");
        } catch (e) {
            setLoginError(true);
        }
    }

    return (
        <Container>
            <ImageContainer source={require('../../assets/background.jpg')}
                            resizeMode="cover"
                            imageStyle={{opacity: 0.4}}>
                <LinearGradient colors={['rgba(84,131,126,0.2)',
                    'rgba(255,255,255,0.62)',
                    'rgba(221,230,229,0.68)',
                    'rgba(59,94,90,0.51)']}>
                    <StartView>
                        <TitleView>
                            <Vaccine height={40}/>
                            <TitleText>
                                My Health
                            </TitleText>
                        </TitleView>
                        <SubtitleView>
                            <Subtitle>Controle as suas vacinas e fique seguro</Subtitle>
                        </SubtitleView>
                        <EmailFieldView>
                            <EmailText>Email</EmailText>
                            <EmailTextField
                                onChangeText={setEmail}
                                value={email}
                                onSubmitEditing={() => passRef.current.focus()}
                                blurOnSubmit={false}/>
                        </EmailFieldView>
                        <PasswordFieldView>
                            <PasswordText>Senha</PasswordText>
                            <PasswordTextField secureTextEntry={true}
                                               onChangeText={setPassword}
                                               value={password}
                                               ref={passRef}/>
                        </PasswordFieldView>
                        {
                            loginError &&
                            <WrongPassView>
                                <WrongPassText hidden={true}>E-mail e/ou senha inválidos.</WrongPassText>
                            </WrongPassView>
                        }
                        <LoginButtonView>
                            <LoginButton disabled={buttonDisabled} onPress={tryLogin}>
                                <LoginButtonText>Entrar</LoginButtonText>
                            </LoginButton>
                        </LoginButtonView>
                        <RegisterButtonView>
                            <RegisterButton onPress={() => navigation.navigate("CreateAccount")}>
                                <RegisterButtonText>Criar minha conta</RegisterButtonText>
                            </RegisterButton>
                        </RegisterButtonView>
                        <ForgotButtonView>
                            <ForgotButton onPress={() => navigation.navigate("LostPass")}>
                                <ForgotButtonText>Esqueci minha senha</ForgotButtonText>
                            </ForgotButton>
                        </ForgotButtonView>
                    </StartView>
                </LinearGradient>
            </ImageContainer>
        </Container>
    );
}

export default Start