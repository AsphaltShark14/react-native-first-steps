import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "../components/Card";
import { globalStyles } from "../styles/global"
import {MaterialIcons} from "@expo/vector-icons";
import { images } from "../styles/global";

export const ReviewDetails = ({ route }) => {
    const { item } = route.params;

    const generateStars = (rating) => {
        
    }

    return (
        <View style={styles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
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
        alignItems: "center",
        padding: 10,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})