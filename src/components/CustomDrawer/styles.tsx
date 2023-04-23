import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: #ADD4D0;
  padding: 40px 24px 40px 24px;
`;

export const TitleDrawerView = styled.View`
  width: 100%;
  align-items: center;
`;

export const DrawerText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #419ED7;
`;

export const DrawerDividier = styled.View`
  width: 90%;
  height: 2px;
  background: #419ED7;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const DrawerButtonView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const DrawerButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;