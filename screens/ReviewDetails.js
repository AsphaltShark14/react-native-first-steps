import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global"

export const ReviewDetails = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
            <Text style={globalStyles.paragraph}>{item.text}</Text>
            <Text style={globalStyles.paragraph}>Rating: {item.rating}</Text>
        </View>
    )
}