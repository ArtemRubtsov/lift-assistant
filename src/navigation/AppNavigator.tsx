import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/HomeScreen"
import { AddLiftScreen } from "../screens/AddLiftScreen"
import { RootStackParamList } from "../types/types"



const Stack = createNativeStackNavigator<RootStackParamList>()

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Лифты'}}/>
                <Stack.Screen  name="AddLift" component={AddLiftScreen} options={{title: 'Добавить лифт'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}