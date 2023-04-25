import React, {useState, useEffect} from "react";
import {
    VaccineContainer,
    VaccineDateText,
    VaccineDateView,
    VaccineName
} from "./styles";
import moment from "moment";

function NextVaccineItemList({item}) {

    return (
        <VaccineContainer>
            <VaccineName>{item.vaccineName.length >= 13 ? item.vaccineName.substring(0, 12) : item.vaccineName}{item.vaccineName.length >= 13 ? '...' : ''}</VaccineName>
            <VaccineDateView>
                <VaccineDateText>{moment(item.vaccineNextDose).format('DD/MM/YYYY')}</VaccineDateText>
            </VaccineDateView>
        </VaccineContainer>
    );
}

export default NextVaccineItemList;