import {MaterialIcons} from "@expo/vector-icons";


export const HeaderIcon = ({ navigation }) => {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <MaterialIcons name="menu" size={28} onPress={openMenu} />  
    )
    
}