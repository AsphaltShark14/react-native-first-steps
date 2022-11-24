import { Home } from "../screens/Home";
import { ReviewDetails } from "../screens/ReviewDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../shared/Header";
import { HeaderIcon } from "../shared/HeaderIcon";


const HomeStack = createNativeStackNavigator();


export function HomeNavigator() {
  return (
      <HomeStack.Navigator 
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
        <HomeStack.Screen 
          name="Home" 
          component={Home} 
          options={ ({navigation, route}) => ({
            title: "Game Review",
            headerTitle: () => <Header title={route.name} />,
            headerLeft: () => <HeaderIcon navigation={navigation} /> 
          })}
        />
        <HomeStack.Screen 
        name="ReviewDetails" 
        component={ReviewDetails}
        options= {{
          title: "Review Details"
        }}
         />
      </HomeStack.Navigator>
  );
}