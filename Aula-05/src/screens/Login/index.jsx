import { StyleSheet, Text, View, Button, TextInput } from "react-native"
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContexts";

const Login = () => {
    const [userName, setUserName] = useState("")
    const [passoword, setPassoword] = useState("")
    const { loginContext } = useContext(AuthContext)


    const handleLogin = async () => {
        if (userName != "" && passoword != "") {
            loginContext();
        }
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput style={styles.textImput} placeholder="    INSIRA SEU LOGIN" onChange={setUserName} value={userName} />
            <TextInput style={styles.textImput} placeholder="    INSIRA SUA SENHA" onChange={setPassoword} value={passoword} />
            <Button title="ENTRAR" onPress={() => handleLogin()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: "center",
    },
    textImput: {
        borderWidth: 1,
        width: "80%",
        alignItems: "center",
        justifyContent: 'center',
    }
});

export default Login;