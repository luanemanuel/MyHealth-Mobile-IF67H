import React, {useEffect} from "react";
import {
    Container,
    Content,
    CreateVaccineButton, CreateVaccineButtonText,
    CreateVaccineButtonView,
    SearchBarView,
    SearchTextInput,
    VaccineListView
} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";
import {FlatList} from "react-native";
import {Vaccine} from "../../interfaces/vaccine";

import Search from "../../assets/search.svg";
import VaccineListItem from "../../components/VaccineListItem";
import {useVaccine} from "../../contexts/VaccineContext";
import {useAuth} from "../../contexts/AuthContext";

function Home({navigation}) {
    const [search, setSearch] = React.useState('');
    const [vaccines, setVaccines] = React.useState<Vaccine[]>([]);

    // @ts-ignore
    const {getUser} = useAuth();
    // @ts-ignore
    const {fetchVaccines} = useVaccine();

    function searchVaccine() {
        if (search.length > 0) {
            return vaccines.filter(vaccine => vaccine.vaccineName.toLowerCase().includes(search.toLowerCase()));
        }
        return vaccines;
    }

    function getVaccines() {
        const userId = getUser().uid;
        fetchVaccines(userId).then(response => {
            setVaccines(response);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getVaccines();
    });

    return (
        <Container>
            <VaccineAppBar haveDrawer={true} haveReturn={false} text='Minhas vacinas' navigation={navigation}/>
            <Content>
                <SearchBarView>
                    <Search width={20} height={20}/>
                    <SearchTextInput
                        onChangeText={setSearch}
                        value={search}
                        placeholder="PESQUISAR VACINA..."
                        placeholderTextColor="#8b8b8b"
                        underlineColorAndroid="transparent"/>
                </SearchBarView>
                <VaccineListView>
                    <FlatList data={searchVaccine()}
                              renderItem={({item}) => <VaccineListItem item={item}/>}
                              keyExtractor={item => item.id} numColumns={2}
                              columnWrapperStyle={{justifyContent: 'space-between'}}/>
                </VaccineListView>
                <CreateVaccineButtonView>
                    <CreateVaccineButton onPress={() => navigation.navigate("NewVaccine")}>
                        <CreateVaccineButtonText>Nova vacina</CreateVaccineButtonText>
                    </CreateVaccineButton>
                </CreateVaccineButtonView>
            </Content>
        </Container>
    );
}

export default Home;