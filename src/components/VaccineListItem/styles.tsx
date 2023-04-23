import React from "react";
import styled from "styled-components/native";

export const VaccineContainer = styled.View`
  width: 165px;
  height: 150px;
  background: #fff;
  margin: 10px;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
`;

export const VaccineName = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-size: 20px;
  color: #3F92C5;
  margin-bottom: 5px;
`;

export const VaccineDoseView = styled.View`
  padding: 2px 5px 2px 5px;
  background: #3F92C5;
`;

export const VaccineDoseText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-size: 14px;
  color: #fff;
`;

export const VaccineDateView = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 2px;
  padding-bottom: 2px;
`;

export const VaccineDateText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-size: 14px;
  color: #8B8B8B;
`;

export const VaccineImageView = styled.View`
  width: 100%;
  height: 55px;
  align-items: center;
  padding-top: 2px;
`;

export const VaccineImage = styled.Image`
  height: 100%;
  width: 80%;
`;

export const NextDoseView = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const NextDoseText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-size: 10px;
  color: #FD7979;
`;