import { StyleSheet } from "react-native-web";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
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