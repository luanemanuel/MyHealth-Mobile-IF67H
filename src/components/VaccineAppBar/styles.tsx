import React from "react";
import styled from "styled-components/native";

export const MyAppBar = styled.View`
  background: #C1E7E3;
  width: 100%;
  height: 8%;
  flex-direction: row;
  align-items: center;
`;

export const AppBarText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: #419ED7;
`;

export const ReturnButton = styled.TouchableOpacity`
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
`;