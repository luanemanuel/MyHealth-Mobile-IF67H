import React, {useEffect, useState} from "react";
import {
    Container,
    Content, CreateButton, CreateButtonText, CreateButtonView,
    DoseFieldView,
    DoseItemText,
    DoseItemView,
    DoseText,
    NextVaccineDateButton,
    NextVaccineDateField,
    NextVaccineDateFieldView,
    NextVaccineDateText,
    NextVaccineDateTextContent,
    VaccineDateButton,
    VaccineDateField,
    VaccineDateFieldView,
    VaccineDateText,
    VaccineDateTextContent,
    VaccineImage,
    VaccineImageButtonText,
    VaccineImagePreviewView,
    VaccineImageSelectButton,
    VaccineImageText,
    VaccineImageView,
    VaccineNameFieldView,
    VaccineNameText,
    VaccineNameTextField
} from "./styles";
import moment from "moment/moment";
import DatePicker from "react-native-date-picker";

const ImagePicker = require('react-native-image-picker');
import VaccineAppBar from "../../components/VaccineAppBar";

import Calendar from "../../assets/calendar.svg";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function NewVaccine({navigation}) {
    const [openVaccinePicker, setOpenVaccinePicker] = useState(false);
    const [vaccineDate, setVaccineDate] = useState(new Date());
    const [vaccineName, setVaccineName] = useState('');
    const [dose, setDose] = useState<String | null>(null);
    const [vaccineImage, setVaccineImage] = useState<string | null>(null);
    const [openNextPicker, setOpenNextPicker] = useState(false);
    const [nextDate, setNextDate] = useState<Date | null>(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    async function getImageFromLibrary() {
        await ImagePicker.launchImageLibrary({mediaType: 'photo', selectionLimit: 1}, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else {
                if (response.assets != undefined && response.assets.length > 0) {
                    const image = response.assets[0].uri;
                    if (image != null) {
                        setVaccineImage(image);
                    } else {
                        console.log('No image selected');
                    }
                } else {
                    console.log('No image selected');
                }
            }
        });
    }

    function validateVaccineName(name) {
        return name.length > 0;
    }

    useEffect(() => {
        const buttonStatus = validateVaccineName(vaccineName) && dose != null && vaccineImage != null && dose.length > 0;
        setButtonDisabled(!buttonStatus);
    });

    function saveVaccine() {

    }

    return (
        <Container>
            <VaccineAppBar haveDrawer={true} text='Minhas vacinas' navigation={navigation}/>
            <Content>
                <VaccineDateFieldView>
                    <VaccineDateText>Data de vacinação</VaccineDateText>
                    <VaccineDateField>
                        <VaccineDateButton onPress={() => setOpenVaccinePicker(true)}>
                            <VaccineDateTextContent>{moment(vaccineDate).format('DD/MM/YYYY')}</VaccineDateTextContent>
                            <Calendar height={20} width={20} style={{paddingRight: 30}}/>
                            <DatePicker modal
                                        title={'Selecione a data'}
                                        date={vaccineDate}
                                        open={openVaccinePicker}
                                        onConfirm={(date) => {
                                            setOpenVaccinePicker(false)
                                            console.log(date)
                                            setVaccineDate(date)
                                        }} onCancel={() => {
                                setOpenVaccinePicker(false)
                            }} mode="date"/>
                        </VaccineDateButton>
                    </VaccineDateField>
                </VaccineDateFieldView>
                <VaccineNameFieldView>
                    <VaccineNameText>Vacina</VaccineNameText>
                    <VaccineNameTextField
                        value={vaccineName}
                        onChangeText={setVaccineName}/>
                </VaccineNameFieldView>
                <DoseFieldView>
                    <DoseText>Dose</DoseText>
                    <DoseItemView>
                        <BouncyCheckbox size={14}
                                        unfillColor="#fff"
                                        fillColor="#419ED7"
                                        innerIconStyle={{
                                            borderColor: "#fff",
                                            borderWidth: 3,
                                            borderStyle: 'solid',
                                        }}
                                        iconImageStyle={{opacity: 0}}
                                        style={{paddingLeft: 15}}
                                        isChecked={dose === "1dose"}
                                        disableBuiltInState
                                        onPress={() => setDose("1dose")}/>
                        <DoseItemText>1a. dose</DoseItemText>
                        <BouncyCheckbox size={14}
                                        unfillColor="#fff"
                                        fillColor="#419ED7"
                                        innerIconStyle={{
                                            borderColor: "#fff",
                                            borderWidth: 3,
                                            borderStyle: 'solid',
                                        }}
                                        iconImageStyle={{opacity: 0}}
                                        style={{paddingLeft: 15}}
                                        isChecked={dose === "2dose"}
                                        disableBuiltInState
                                        onPress={() => setDose("2dose")}/>
                        <DoseItemText>2a. dose</DoseItemText>
                        <BouncyCheckbox size={14}
                                        unfillColor="#fff"
                                        fillColor="#419ED7"
                                        innerIconStyle={{
                                            borderColor: "#fff",
                                            borderWidth: 3,
                                            borderStyle: 'solid',
                                        }}
                                        iconImageStyle={{opacity: 0}}
                                        style={{paddingLeft: 15}}
                                        isChecked={dose === "3dose"}
                                        disableBuiltInState
                                        onPress={() => setDose("3dose")}/>
                        <DoseItemText>3a. dose</DoseItemText>
                        <BouncyCheckbox size={14}
                                        unfillColor="#fff"
                                        fillColor="#419ED7"
                                        innerIconStyle={{
                                            borderColor: "#fff",
                                            borderWidth: 3,
                                            borderStyle: 'solid',
                                        }}
                                        iconImageStyle={{opacity: 0}}
                                        style={{paddingLeft: 15}}
                                        isChecked={dose === "single"}
                                        disableBuiltInState
                                        onPress={() => setDose("single")}/>
                        <DoseItemText>Dose única</DoseItemText>
                    </DoseItemView>
                </DoseFieldView>
                <VaccineImageView>
                    <VaccineImageText>Comprovante</VaccineImageText>
                    <VaccineImageSelectButton onPress={() => getImageFromLibrary().catch(console.log)}>
                        <VaccineImageButtonText>Selecionar imagem...</VaccineImageButtonText>
                    </VaccineImageSelectButton>
                </VaccineImageView>
                {
                    vaccineImage != null &&
                    <VaccineImage source={{uri: vaccineImage}}/>
                }
                <NextVaccineDateFieldView>
                    <NextVaccineDateText>Próxima vacinação</NextVaccineDateText>
                    <NextVaccineDateField>
                        <NextVaccineDateButton onPress={() => setOpenNextPicker(true)}>
                            {
                                nextDate == null &&
                                <NextVaccineDateTextContent>Selecione a data</NextVaccineDateTextContent>
                            }
                            {
                                nextDate != null &&
                                <NextVaccineDateTextContent>{moment(nextDate).format('DD/MM/YYYY')}</NextVaccineDateTextContent>
                            }
                            <Calendar height={20} width={20} style={{paddingRight: 30}}/>
                            <DatePicker modal
                                        title={'Selecione a data'}
                                        date={nextDate ?? new Date()}
                                        open={openNextPicker}
                                        onConfirm={(date) => {
                                            setOpenNextPicker(false)
                                            console.log(date)
                                            setNextDate(date)
                                        }} onCancel={() => {
                                setOpenNextPicker(false)
                            }} mode="date"/>
                        </NextVaccineDateButton>
                    </NextVaccineDateField>
                </NextVaccineDateFieldView>
                <CreateButtonView>
                    <CreateButton disabled={buttonDisabled}
                                  style={{opacity: buttonDisabled ? 0.5 : 1}}
                                  onPress={saveVaccine}>
                        <CreateButtonText>Cadastrar</CreateButtonText>
                    </CreateButton>
                </CreateButtonView>
            </Content>
        </Container>
    );
}

export default NewVaccine;