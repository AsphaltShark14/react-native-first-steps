import { View, Text } from "react-native";
import { globalStyles } from "../styles/global"

export const About = () => {
    return (
        <View style={{...globalStyles.container, paddingHorizontal: 20}}>
            <Text style={globalStyles.titleText}>It's just a test app. Don't expect it to have some complex about page. I'm just a guy, learning React Native. What can I say more...</Text>
        </View>
    )
}