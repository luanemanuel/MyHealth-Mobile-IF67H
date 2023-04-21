import React, {useState, useEffect} from "react";
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

import Vaccine from "../../assets/icon-vaccine.svg";

function Start() {
    const [loginError, setLoginError] = useState(false);

    useEffect(() => {
        if (loginError) {
            console.log("Login error");
        }
    });

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
                            <EmailTextField/>
                        </EmailFieldView>
                        <PasswordFieldView>
                            <PasswordText>Senha</PasswordText>
                            <PasswordTextField secureTextEntry={true}/>
                        </PasswordFieldView>
                        {
                            loginError &&
                            <WrongPassView>
                                <WrongPassText hidden={true}>E-mail e/ou senha inválidos.</WrongPassText>
                            </WrongPassView>
                        }
                        <LoginButtonView>
                            <LoginButton>
                                <LoginButtonText>Entrar</LoginButtonText>
                            </LoginButton>
                        </LoginButtonView>
                        <RegisterButtonView>
                            <RegisterButton>
                                <RegisterButtonText>Criar minha conta</RegisterButtonText>
                            </RegisterButton>
                        </RegisterButtonView>
                        <ForgotButtonView>
                            <ForgotButton>
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