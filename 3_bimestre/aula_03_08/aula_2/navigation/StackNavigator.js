import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import login from '../screens/login/login'
import home from '../screens/home/home'

const stack = createNativeStackNavigator

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                 name="login"
                 component={login}
                />

                 <Stack.Screen
                 name="home"
                 component={home}
                />

            </Stack.Navigator>   
        </NavigationContainer>
             
    );
}