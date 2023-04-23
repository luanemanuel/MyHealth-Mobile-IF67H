import React from "react";
import {Container, Content, SearchBarView, SearchTextInput, VaccineListView} from "./styles";
import VaccineAppBar from "../../components/VaccineAppBar";
import {FlatList} from "react-native";
import {Vaccine} from "../../interfaces/vaccine";

import Search from "../../assets/search.svg";
import VaccineListItem from "../../components/VaccineListItem";

function Home({navigation}) {
    let myVaccineMock = new Vaccine("1",
        "Hepatite BBBBBBBBBBBBBBBB",
        "https://picsum.photos/600/300",
        new Date(),
        "1ª dose",
        new Date(),
    );

    const [search, setSearch] = React.useState('');
    const [vaccines, setVaccines] = React.useState<Vaccine[]>([myVaccineMock, myVaccineMock]);

    return (
        <Container>
            <VaccineAppBar haveDrawer={true} text='Minhas vacinas' navigation={navigation}/>
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
                    <FlatList data={vaccines}
                              renderItem={({item}) => <VaccineListItem item={item}/>}
                              keyExtractor={item => item.id} numColumns={2} columnWrapperStyle={{justifyContent: 'space-between'}}/>
                </VaccineListView>
            </Content>
        </Container>
    );
}

export default Home;