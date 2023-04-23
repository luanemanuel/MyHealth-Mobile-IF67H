import React, {useState, useEffect} from "react";
import {
    NextDoseText,
    NextDoseView,
    VaccineContainer,
    VaccineDateText,
    VaccineDateView,
    VaccineDoseText,
    VaccineDoseView, VaccineImage, VaccineImageView,
    VaccineName
} from "./styles";
import moment from "moment";

function VaccineItemList({item}) {
    return (
        <VaccineContainer>
            <VaccineName>{item.vaccineName.length >= 13 ? item.vaccineName.substring(0, 12) : item.vaccineName}{item.vaccineName.length >= 13 ? '...' : ''}</VaccineName>
            <VaccineDoseView>
                <VaccineDoseText>{item.vaccineDose}</VaccineDoseText>
            </VaccineDoseView>
            <VaccineDateView>
                <VaccineDateText>{moment(item.vaccineDate).format('DD/MM/YYYY')}</VaccineDateText>
            </VaccineDateView>
            <VaccineImageView>
                <VaccineImage source={{uri: item.vaccineImage}}/>
            </VaccineImageView>
            <NextDoseView>
                <NextDoseText>{item.vaccineNextDose != null ? "Próxima dose em: " + moment(item.vaccineNextDose).format('DD/MM/YYYY') : "Não há próxima dose"}</NextDoseText>
            </NextDoseView>
        </VaccineContainer>
    );
}

export default VaccineItemList;