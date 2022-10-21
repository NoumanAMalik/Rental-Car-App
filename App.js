import { StatusBar } from "expo-status-bar";
import React from "react";
import axios from "axios";
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    useWindowDimensions,
    TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function App() {
    const [carData, setCarData] = useState([]);
    const window = useWindowDimensions();
    const [search, setSearch] = useState("");

    useEffect(() => {
        (async () => {
            const data = await axios.get("https://myfakeapi.com/api/cars/");
            setCarData([...data.data.cars]);
            setCarData((prevState) => prevState.splice(970));
        })();
    }, []);

    return (
        <View>
            <View style={styles.search} width={window.width - 20}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search for cars"
                    onChangeText={(text) => setSearch(text)}
                    defaultValue={search}
                />
            </View>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.container}
            >
                {carData &&
                    carData.length === 30 &&
                    carData.map((car) => {
                        let carName =
                            car.car_model_year +
                            " " +
                            car.car +
                            " " +
                            car.car_model;
                        if (carName.includes(search)) {
                            return <Card {...car} key={car.id} />;
                        }
                    })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        // flex: 1,
        // flexDirection: "row",
        // flexWrap: "wrap",
    },
    scrollView: {
        alignSelf: "center",
        width: "100%",
    },
    search: {
        height: 50,
        padding: 10,
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#ded",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowRadius: 15,
        // shadowColor: "rgba(0, 0, 0, 0.35)",
        // shadowOpacity: 1,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: "center",
    },
    searchBar: {
        height: 50,
        padding: 5,
        fontSize: 15,
    },
});
