import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Card } from "../components/Card";
import { globalStyles } from "../styles/global"
import { homeStyles } from "../styles/home";

export const Home = ({ navigation }) => {

    const [reviews, setReviews] = useState([
        {title: "Days Gone", rating: 5, text: "Lorem ipsum", key: "1"},
        {title: "God of War", rating: 5, text: "Lorem ipsum", key: "2"},
        {title: "Battlefield 2042", rating: 2, text: "Lorem Ipsum lorem ipsum", key: "3"},
        {title: "Grand Theft Auto V", rating: 4, text: "Lorem ipsum", key: "4"},
    ]);

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home component</Text>
            <View style={homeStyles.listContainer}>
                <FlatList
                    data={reviews}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", { item })}>
                            <Card>
                             <Text style={homeStyles.titleText}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
            
        </View>
    )
}