import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import Carro from 'react-native-vector-icons/AntDesign'

const Detalhes = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Detalhes</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
                <Text style={styles.texto}>  <Carro style={{ marginRight: 15 }} name="shoppingcart" size={20} color="red" /> IR PARA HOME</Text>
            </TouchableOpacity>
        </View>
    )


}

export default Detalhes

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    titulo: {
        fontSize: 36,
    },
    botao: {
        backgroundColor: "blue",
        borderRadius: 15,
        fontWeight: "600",
        width: "80%",
        padding: 16,
        alignItems: "center",
        marginTop: 50

    },
    texto: {
        color: "#fff",
        fontSize: 20
    }


})
