import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import home from "../screens/home";
import pizzas from "../screens/pizzas";
import finalizar_pedido from "../screens/finalizar_pedido";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
        />

         <Stack.Screen
          name="home"
          component={home}
        />

        <Stack.Screen
          name="pizzas"
          component={pizzas}
        />

        <Stack.Screen
          name="finalizar_pedido"
          component={finalizar_pedido}
        /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}
