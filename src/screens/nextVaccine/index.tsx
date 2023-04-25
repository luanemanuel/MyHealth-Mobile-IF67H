import React, {useEffect} from "react";
import {
    Container,
    Content,
    ListVaccineView,
    NewVaccineButton,
    NewVaccineButtonText,
    NewVaccineButtonView
} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";
import {FlatList} from "react-native";
import {Vaccine} from "../../interfaces/vaccine";
import NextVaccineItemList from "../../components/NextVaccineListItem";
import {useVaccine} from "../../contexts/VaccineContext";
import {useAuth} from "../../contexts/AuthContext";


function NextVaccine({navigation}) {
    const [vaccines, setVaccines] = React.useState<Vaccine[]>([]);

    // @ts-ignore
    const {getUser} = useAuth();
    // @ts-ignore
    const {fetchVaccines} = useVaccine();

    function getNextVaccines() {
        const userId = getUser().uid;
        fetchVaccines(userId).then(response => {
            const nextVaccines = response.filter(vaccine => vaccine.vaccineNextDose >= new Date());
            setVaccines(nextVaccines);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getNextVaccines();
    });

    return (
        <Container>
            <VaccineAppBar haveDrawer={true} haveReturn={false} text='Próximas vacinas' navigation={navigation}/>
            <Content>
                <ListVaccineView>
                    <FlatList data={vaccines} renderItem={({item}) => <NextVaccineItemList item={item}/>}/>
                </ListVaccineView>
                <NewVaccineButtonView>
                    <NewVaccineButton onPress={() => navigation.navigate("NewVaccine")}>
                        <NewVaccineButtonText>Nova vacina</NewVaccineButtonText>
                    </NewVaccineButton>
                </NewVaccineButtonView>
            </Content>
        </Container>
    );
}

export default NextVaccine;