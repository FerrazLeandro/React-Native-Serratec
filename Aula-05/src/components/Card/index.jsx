import { useNavigation } from "@react-navigation/native"
import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"


const Card = ({ item }) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate("Detalhes")} style={styles.taskContainer}>
            <Text style={styles.texto}>{item.titulo}</Text>
        </TouchableOpacity>
    )  
}

export default Card