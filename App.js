import { StatusBar } from "expo-status-bar";
import React from "react";
import axios from "axios";
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function App() {
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await axios.get("https://myfakeapi.com/api/cars/");
            setCarData([...data.data.cars]);
            setCarData((prevState) => prevState.splice(970));
        })();
    }, []);

    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.container}
        >
            {carData &&
                carData.length === 30 &&
                carData.map((car) => {
                    return <Card {...car} key={car.id} />;
                })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    scrollView: {
        alignSelf: "center",
        width: "100%",
    },
});
