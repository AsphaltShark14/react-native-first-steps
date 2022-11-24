import { View, Text, StyleSheet, Image } from "react-native";

export const Header = ({ title }) => {
    
    return (
        <View style={styles.header}>
                <Image source={require("../assets/pad-logo.png")} style={styles.logo} />
                <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
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
    logo: {
        width: 25,
        height: 15,
        marginRight: 10
    }
  })