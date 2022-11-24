import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, Pressable, Keyboard } from "react-native";
import { Card } from "../components/Card";
import { globalStyles } from "../styles/global"
import { homeStyles } from "../styles/home";
import { MaterialIcons } from "@expo/vector-icons";
import { ReviewForm } from "../components/ReviewForm";

export const Home = ({ navigation }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: "Days Gone", rating: 5, text: "Lorem ipsum", key: "1"},
        {title: "God of War", rating: 5, text: "Lorem ipsum", key: "2"},
        {title: "Battlefield 2042", rating: 2, text: "Lorem Ipsum lorem ipsum", key: "3"},
        {title: "Grand Theft Auto V", rating: 4, text: "Lorem ipsum", key: "4"},
    ]);

    const handlePress = () => {
        setModalOpen(!modalOpen);
    }

    const addReview = ( review ) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => ([review, ...currentReviews ]));
        handlePress();
    }

    return (
        <View style={globalStyles.container}>
            
            <Modal visible={modalOpen} animationType="slide">
                <Pressable onPress={Keyboard.dismiss}>
                    <View style={homeStyles.modalContent}>
                        <MaterialIcons name="close" onPress={handlePress} size={30} style={homeStyles.closeIcon} />
                        <ReviewForm addReview={addReview} handlePress={handlePress} />
                    </View>
                </Pressable>
            </Modal>
            <TouchableOpacity style={homeStyles.addButton} onPress={handlePress}>
            <MaterialIcons name="add" onPress={handlePress} style={homeStyles.icon} size={20}/>
            <Text style={homeStyles.buttonText}>Add a review!</Text>
            </TouchableOpacity>

            <Text style={globalStyles.titleText}>Game reviews</Text>
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