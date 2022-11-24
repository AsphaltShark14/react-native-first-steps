import { View, StyleSheet} from "react-native"

export const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        border: "1px solid #DBDEEA",
        shadowOffset: {width: 0, height: 3},
        shadowColor: "rgba(211, 208, 208)",
        shadowRadius: 3,
        shadowOpacity: 0.2,
        elevation: 3,
        marginTop: 12,
    },
    cardContent: {
        marginHorizontal: 24,
        marginVertical: 12,
    }
})