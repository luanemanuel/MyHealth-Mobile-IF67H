import React from "react";
import styled from "styled-components/native";

export const VaccineContainer = styled.View`
  width: 90%;
  height: 70px;
  background: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
`;

export const VaccineName = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-size: 20px;
  color: #3F92C5;
  margin-bottom: 5px;
`;

export const VaccineDateView = styled.View`
  width: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
`;

export const VaccineDateText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-size: 14px;
  color: #8B8B8B;
`;