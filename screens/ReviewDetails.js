import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "../components/Card";
import { globalStyles } from "../styles/global"
import { images } from "../styles/global";

export const ReviewDetails = ({ navigation, route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Card>
                <Text style={{...globalStyles.titleText, textAlign: "center"}}>{item.title}</Text>
                <Text style={globalStyles.paragraph}>{item.text}</Text>
                <View style={styles.rating}>
                    <Text>Game rating:</Text>
                    <Image source={images.ratings[item.rating]} />
                </View>
                
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 10,
        flexDirection: "row"
    },
    boxLayout: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    icon: {
        marginLeft: 24,
        color: "#4A4F67",
    }
})