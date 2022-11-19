import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detalhes from '../screens/Detalhes';
import { Home } from '../screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false}}/>
      <Stack.Screen name='Detalhes' component={Detalhes}/>
    </Stack.Navigator>
  )
}


export const RotasPrivadas = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false}}/>
      <Tab.Screen name="Perfil" component={Detalhes} options={{
        headerStyle: {
          backgroundColor: "lightblue"
        },
        headerTitleAlign: "center"
      }}/>
    </Tab.Navigator>
  );
};
