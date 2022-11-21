import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/index'
import { RotasPrivadas } from '../Routes/RotasPrivadas';

const Stack = createNativeStackNavigator()

export const RotasPublicas = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ title: "Meu Login", headerShown:"false" }} />
            <Stack.Screen name="Privado" component={RotasPrivadas} />
        </Stack.Navigator>
    );
};