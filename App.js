import { StatusBar } from "expo-status-bar";
import React from "react";
import axios from "axios";
import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

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
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Image
                style={styles.image}
                source={{
                    uri: "https://picsum.photos/200/",
                }}
            />
            <Image
                source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png/",
                }}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "start",
    },
    image: {
        width: 200,
        height: 200,
        padding: 20,
    },
});
