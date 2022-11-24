import { StyleSheet } from "react-native-web";

export const homeStyles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 20
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
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
    },
    modalContent: {
        marginTop: 20
    },
    addButton: {
        flexDirection: "row",
        borderRadius: 8,
        backgroundColor: "#4A4F67",
        alignItems: "center",
        paddingHorizontal: 6,
        paddingVertical: 12,
        marginBottom: 12,
        justifyContent: "center"
    },
    icon: {
        color: "white",
    },
    closeIcon: {
        alignSelf: "flex-end",
        padding: 20
    }
})