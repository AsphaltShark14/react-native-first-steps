import { View, Text } from "react-native";
import { globalStyles } from "../styles/global"

export const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About component</Text>
        </View>
    )
}