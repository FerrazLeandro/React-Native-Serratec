import { StyleSheet, Text, View, Button, TextInput} from "react-native"
import { useState } from 'react';
import {login} from '../../services/auth'
import { useContext } from 'react'
import AuthContext from "../../contexts/AuthContext";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {logado} = useContext(AuthContext)

    console.log("Contexto:", logado)
  
    const handleLogin = async () => {
      
    }
  
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput placeholder='USERNAME' onChangeText={setUsername} value={username}/>
        <TextInput placeholder='PASSWORD' onChangeText={setPassword} value={password}/>
        <Button title="ENTRAR" onPress={() => handleLogin()} />
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