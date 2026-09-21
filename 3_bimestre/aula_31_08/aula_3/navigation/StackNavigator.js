import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa a tela login.js diretamente da pasta screens
import Login from '../screens/login';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Tela de Login' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}