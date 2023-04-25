import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  align-items: flex-end;
  background: #ADD4D0;
  height: 100%;
  width: 100%;
`

export const Content = styled.View`
  align-items: flex-end;
  height: 100%;
  width: 100%;
  padding: 24px;
`;

export const ListVaccineView = styled.View`
  height: 80%;
  width: 100%;
`;

export const NewVaccineButtonView = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const NewVaccineButton = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  background: #37BD6D;
  align-items: center;
  justify-content: center;
  elevation: 10;
`;

export const NewVaccineButtonText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 5px 25px 5px 25px;
  color: #fff;
`;