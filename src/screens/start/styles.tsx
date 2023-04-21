import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  align-items: center;
  background: rgba(84, 131, 126, 0.2);
  height: 100%;
  padding: 24px;
`;

export const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 50px;
`;

export const TitleText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  text-decoration-line: underline;
  color: #419ED7;
`;

export const SubtitleView = styled.View`
  padding-top: 50px;
`;

export const Subtitle = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #419ED7;
`;

export const EmailFieldView = styled.View`
  padding-top: 50px;
  flex-direction: row;
  align-items: center;
`;

export const EmailTextField = styled.TextInput`
  width: 75%;
  height: 40px;
  background: #fff;
  margin-left: 10px;
  color: #419ED7;
  font-family: 'AveriaLibre-Regular';
  font-size: 18px;
`;

export const EmailText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const PasswordFieldView = styled.View`
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const PasswordTextField = styled.TextInput`
  width: 75%;
  height: 40px;
  background: #fff;
  margin-left: 10px;
  color: #419ED7;
  font-family: 'AveriaLibre-Regular';
  font-size: 18px;
`;

export const PasswordText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const WrongPassView = styled.View`
`;

export const WrongPassText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: #FD7979;
`;

export const LoginButtonView = styled.View`
    padding-top: 50px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 31%;
  height: 40px;
  background: #37BD6D;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 5px 25px 5px 25px;
`;

export const RegisterButtonView = styled.View`
    padding-top: 50px;
`;

export const RegisterButton = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  background: #419ED7;
  align-items: center;
  justify-content: center;
`;

export const RegisterButtonText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 5px 25px 5px 25px;
`;

export const ForgotButtonView = styled.View`
    padding-top: 50px;
`;

export const ForgotButton = styled.TouchableOpacity`
  width: 70%;
  height: 35px;
  background: #B0CCDE;
  align-items: center;
  justify-content: center;
`;

export const ForgotButtonText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 5px 25px 5px 25px;
`;


