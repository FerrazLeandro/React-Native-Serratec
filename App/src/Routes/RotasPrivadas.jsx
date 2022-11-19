import { Home } from "../screens/Home"
import Detalhes from "../screens/Detalhes"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{  headerShown:"false" }} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
)}


export const RotasPrivadas = () => {
    return (
            <tab.Navigator>
                <tab.Screen name="Homee"   component={HomeStack} options={{  headerShown:"false" }}/>
                <tab.Screen name="Perfil" component={Detalhes}  />
            </tab.Navigator>
    );
};