import { Text } from 'react-native';
import { styles } from './styles'

function Gatinho ({ nome } ) {
    return (
        <Text style={styles.texto}>Gatinho: {nome}</Text>
    )
}

export default Gatinho