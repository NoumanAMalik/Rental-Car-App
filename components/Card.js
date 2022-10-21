import react from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Card(props) {
    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{
                    uri: `https://picsum.photos/300/?random=${props.id}`,
                }}
            />
            <Text style={styles.text_name}>
                {props.car_model_year +
                    " " +
                    props.car_color +
                    " " +
                    props.car +
                    " " +
                    props.car_model}
            </Text>
            <Text style={styles.text_price}>{props.price} / day</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ded",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 15,
        shadowColor: "rgba(0, 0, 0, 0.35)",
        shadowOpacity: 1,
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 5,
    },
    text_name: {
        width: 300,
        fontSize: 18,
        marginTop: 10,
    },
    text_price: {
        fontSize: 16,
        marginVertical: 2,
    },
});
