import { View, Text, StyleSheet } from "react-native";

export const Header = ({ title }) => {
    
    return (
        <View styles={styles.header}>
            <View>
                <Text styles={styles.headerText}>{title}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
    },
  })