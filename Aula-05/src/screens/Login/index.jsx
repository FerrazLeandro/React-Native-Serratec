import {Text, View, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const Login = ({navigation}) => {

  const salvar = async () => {
    try {
      await AsyncStorage.setItem('@manter_conectado', 'true');
    } catch (e) {
      console.error(e);
    }
  };

  const obter = async () => {
    try {
      const value = await AsyncStorage.getItem('@manter_conectado');
      if (value !== null && value == "true") {
        console.log(value);
        navigation.navigate("Privado")
      } else {
        console.error("Nenhuma informação encontrada")
      }
    } catch (e) {
        console.error(e);
    }
  };

  useEffect(() => {
    obter()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Icon name="restore-from-trash" size={150} color="#f00" />
      <Button title="ENTRAR" onPress={() => navigation.navigate('Privado')} />
      <Button title="Salvar no AsyncStorage" onPress={salvar} />
      <Button title="Obter AsyncStorage" onPress={obter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Login;
