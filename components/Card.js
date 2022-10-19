import react from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Card(props) {
    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{
                    uri: `https://picsum.photos/200/?random=${props.id}`,
                }}
            />
            <Text>
                {props.car_model_year} {props.car} {props.car_model}
            </Text>
            <Text>{props.price}/day</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {},
    image: {
        width: 200,
        height: 200,
        padding: 20,
    },
});
