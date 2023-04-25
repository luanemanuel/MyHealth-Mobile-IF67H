import React, {useEffect, useState} from "react";
import {Container, Content, DeleteButton, DeleteButtonText, DeleteButtonView} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";
import {useAuth} from "../../contexts/AuthContext";
import {useVaccine} from "../../contexts/VaccineContext";
import {
    CreateButton, CreateButtonText,
    CreateButtonView,
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
    VaccineImageSelectButton,
    VaccineImageText,
    VaccineImageView,
    VaccineNameFieldView,
    VaccineNameText,
    VaccineNameTextField
} from "./styles";
import moment from "moment";
import Calendar from "../../assets/calendar.svg";
import Trash from "../../assets/trash_icon.svg";
import DatePicker from "react-native-date-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Vaccine} from "../../interfaces/vaccine";

const ImagePicker = require('react-native-image-picker');

function EditVaccine({navigation}) {
    const [vaccineId, setVaccineId] = useState('');
    const [openVaccinePicker, setOpenVaccinePicker] = useState(false);
    const [vaccineDate, setVaccineDate] = useState(new Date());
    const [vaccineName, setVaccineName] = useState('');
    const [dose, setDose] = useState<string | null>(null);
    const [vaccineImage, setVaccineImage] = useState<string | null>(null);
    const [openNextPicker, setOpenNextPicker] = useState(false);
    const [nextDate, setNextDate] = useState<Date | null>(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(true);

    // @ts-ignore
    const {getUser} = useAuth();
    // @ts-ignore
    const {getVaccine, editVaccine, deleteVaccine} = useVaccine();

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

    function verifyVaccineIsEdited() {
        const vaccine = getVaccine();
        if (vaccine != null) {
            const disabled = vaccine.vaccineName != vaccineName || vaccine.vaccineDate != vaccineDate || vaccine.vaccineDose != dose || vaccine.vaccineNextDose != nextDate || vaccine.vaccineImage != vaccineImage;
            return !disabled;
        }
        return true;
    }

    function saveVaccine() {
        const userId = getUser().uid;
        editVaccine(userId, new Vaccine(vaccineId, vaccineName, vaccineImage ?? '', vaccineDate, dose ?? '', nextDate,)).then(() => {
            navigation.goBack();
        }).catch((error) => {
            console.log(error);
        });
    }

    function deleteActualVaccine() {
        const userId = getUser().uid;
        deleteVaccine(userId, vaccineId).then(() => {
            navigation.goBack();
        }).catch((error) => {
            console.log(error);
        });
    }

    function loadActualVaccine() {
        const vaccine = getVaccine();
        if (vaccine != null) {
            setVaccineId(vaccine.id);
            setVaccineName(vaccine.vaccineName);
            setVaccineDate(vaccine.vaccineDate);
            setDose(vaccine.vaccineDose);
            setNextDate(vaccine.vaccineNextDose);
            setVaccineImage(vaccine.vaccineImage);
        }
    }

    useEffect(() => {
        if (loading) {
            loadActualVaccine();
            setLoading(false);
        }
        setButtonDisabled(verifyVaccineIsEdited());
    });

    return (
        <Container>
            <VaccineAppBar haveDrawer={false} haveReturn={true} text='Editar vacina' navigation={navigation}/>
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
                                        isChecked={dose === "1a. dose"}
                                        disableBuiltInState
                                        onPress={() => setDose("1a. dose")}/>
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
                                        isChecked={dose === "2a. dose"}
                                        disableBuiltInState
                                        onPress={() => setDose("2a. dose")}/>
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
                                        isChecked={dose === "3a. dose"}
                                        disableBuiltInState
                                        onPress={() => setDose("3a. dose")}/>
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
                                        isChecked={dose === "Dose única"}
                                        disableBuiltInState
                                        onPress={() => setDose("Dose única")}/>
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
                        <CreateButtonText>Salvar alterações</CreateButtonText>
                    </CreateButton>
                </CreateButtonView>
                <DeleteButtonView>
                    <DeleteButton onPress={deleteActualVaccine}>
                        <Trash height={20} width={20} style={{paddingRight: 30}}/>
                        <DeleteButtonText>Excluir</DeleteButtonText>
                    </DeleteButton>
                </DeleteButtonView>
            </Content>
        </Container>
    );
}

export default EditVaccine;