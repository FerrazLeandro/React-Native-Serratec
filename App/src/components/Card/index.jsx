import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"




const Card = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Detalhes")} style={styles.taskContainer}>
            <Text style={styles.texto}>{item.titulo}</Text>

        </TouchableOpacity>
    )
}

export default Card