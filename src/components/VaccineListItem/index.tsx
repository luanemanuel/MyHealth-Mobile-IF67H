import React, {useState, useEffect} from "react";
import {VaccineContainer, VaccineName} from "./styles";
import {Text} from "react-native";

function VaccineItemList({item}) {
    return (
        <VaccineContainer>
            <VaccineName>{item.vaccineName.length >= 13 ? item.vaccineName.substring(0, 15) : item.vaccineName}{item.vaccineName.length >= 13 ? '...' : ''}</VaccineName>
        </VaccineContainer>
    );
}

export default VaccineItemList;