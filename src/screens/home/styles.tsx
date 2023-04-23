import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  align-items: flex-end;
  background: #ADD4D0;
  height: 100%;
  width: 100%;
`

export const Content = styled.View`
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 24px;
`;

export const SearchBarView = styled.View`
  width: 95%;
  height: 32px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

export const SearchTextInput = styled.TextInput`
  width: 100%;
  height: 32px;
  background: transparent;
  margin-left: 10px;
  color: #419ED7;
  font-family: 'AveriaLibre-Regular';
  font-size: 14px;
  padding: 0;
`;

export const VaccineListView = styled.View`
  width: 100%;
  height: 80%;
  padding-top: 20px;
  padding-bottom: 20px;
`;
