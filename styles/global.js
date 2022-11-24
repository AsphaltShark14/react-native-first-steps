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
        fontSize: 16,
        fontWeight: "bold"
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#DBDEEA",
        marginVertical: 12,
        paddingVertical: 12,
        paddingHorizontal: 6, 
    },
    inputError: {
        borderRadius: 6,
        borderWidth: 3,
        borderColor: "#FA233B",
        marginVertical: 12,
        paddingVertical: 12,
        paddingHorizontal: 6, 
    },
    errorText: {
        color: "#FF888E",
        fontWeight: "bold",
        fontSize: 14,
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