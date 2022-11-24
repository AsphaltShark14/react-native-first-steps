import { StyleSheet } from "react-native-web";

export const homeStyles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
    },
    titleText: {
        color: "#4A4F67",
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center"
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
})