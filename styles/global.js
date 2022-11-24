import { StyleSheet } from "react-native-web";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
    },
    titleText: {
        color: "#5B627E",
        fontSize: 16
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
})

export const images = {
    ratings: {
        "1": require("../assets/rating-1.png"),
        "2": require("../assets/rating-2.png"),
        "3": require("../assets/rating-3.png"),
        "4": require("../assets/rating-4.png"),
        "5": require("../assets/rating-5.png"),
    } 
}