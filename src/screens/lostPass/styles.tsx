import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  align-items: center;
  background: #ADD4D0;
  height: 100%;
  width: 100%;
`

export const Content = styled.View`
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 24px;
  justify-content: center;
`;

export const EmailFieldView = styled.View`
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const EmailTextField = styled.TextInput`
  width: 83%;
  height: 40px;
  background: #fff;
  margin-left: 10px;
  color: #419ED7;
  font-family: 'AveriaLibre-Regular';
  font-size: 16px;
`;

export const EmailText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const RecoverButtonView = styled.View`
  padding-top: 80%;
  align-items: center;
  width: 100%;
`;

export const RecoverButton = styled.TouchableOpacity`
  width: 60%;
  height: 40px;
  background: #37BD6D;
  align-items: center;
  justify-content: center;
  elevation: 10;
`;

export const RecoverButtonText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 5px 25px 5px 25px;
  color: #fff;
`;

export const WrongMailView = styled.View`
`;

export const WrongMailText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: #FD7979;
`;
