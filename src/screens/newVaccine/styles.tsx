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

export const VaccineDateFieldView = styled.View`
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const VaccineDateField = styled.View`
  width: 50%;
  height: 35px;
  background: #fff;
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const VaccineDateTextContent = styled.Text`
  background: #fff;
  margin-left: 10px;
  color: #419ED7;
  font-family: 'AveriaLibre-Regular';
  font-size: 18px;
`;

export const VaccineDateText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const VaccineDateButton = styled.TouchableOpacity`
  width: 100%;
  background: transparent;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const VaccineNameFieldView = styled.View`
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const VaccineNameTextField = styled.TextInput`
  width: 50%;
  height: 35px;
  background: #fff;
  margin-left: 10px;
  color: #419ED7;
  font-family: 'AveriaLibre-Regular';
  font-size: 16px;
  padding-top: 5px;
`;

export const VaccineNameText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const DoseFieldView = styled.View`
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const DoseText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding-right: 10px;
  color: #fff;
`;

export const DoseItemText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #fff;
`;

export const DoseItemView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 75%;
`;

export const VaccineImageView = styled.View`
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const VaccineImageText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const VaccineImageSelectButton = styled.TouchableOpacity`
  background: #419ED7;
  width: 50%;
  height: 28px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const VaccineImageButtonText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #fff;
`;

export const VaccineImage = styled.Image`
  margin-top: 20px;
  width: 50%;
  height: 10%;
`;

export const NextVaccineDateFieldView = styled.View`
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const NextVaccineDateField = styled.View`
  width: 50%;
  height: 35px;
  background: #fff;
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NextVaccineDateTextContent = styled.Text`
  background: #fff;
  margin-left: 10px;
  color: #419ED7;
  font-family: 'AveriaLibre-Regular';
  font-size: 18px;
`;

export const NextVaccineDateText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const NextVaccineDateButton = styled.TouchableOpacity`
  width: 100%;
  background: transparent;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CreateButtonView = styled.View`
  padding-top: 80%;
  align-items: center;
  width: 100%;
`;

export const CreateButton = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  background: #37BD6D;
  align-items: center;
  justify-content: center;
  elevation: 10;
`;

export const CreateButtonText = styled.Text`
  font-family: 'AveriaLibre-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 5px 25px 5px 25px;
  color: #fff;
`;