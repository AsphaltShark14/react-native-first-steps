import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from './HomeNavigator';
import {AboutNavigator} from "./AboutNavigator";

const Drawer = createDrawerNavigator();

export function Navigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, drawerLabelStyle: { color: "#4A4F67", fontWeight: "bold"} }}>
                <Drawer.Screen 
                    name="HomeNav" 
                    component={HomeNavigator} 
                    options={{
                        title: "Home", 
                        }}
                        />
                <Drawer.Screen name="AboutNav" component={AboutNavigator} options={{title: "About"}} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}