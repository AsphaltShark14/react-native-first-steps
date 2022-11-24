import { Home } from "../screens/Home";
import { ReviewDetails } from "../screens/ReviewDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../shared/Header";
import { getHeaderTitle } from '@react-navigation/elements';
import { Text } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import { HeaderIcon } from "../shared/HeaderIcon";
import { About } from "../screens/About";


const AboutStack = createNativeStackNavigator();


export function AboutNavigator() {
  return (
      <AboutStack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#B3B6CC',
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 14,
            color: "#333",
            letterSpacing: 1,
          },
        }}
      >
        <AboutStack.Screen 
          name="About" 
          component={About} 
          options={ ({navigation, route}) => ({
            title: "About",
            headerTitle: () => <Header title={route.name} />,
            headerLeft: () => <HeaderIcon navigation={navigation} /> 
          })}
        />
      </AboutStack.Navigator>
  );
}