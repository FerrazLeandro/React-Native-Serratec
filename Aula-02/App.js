import { Text, ScrollView, View, Button, TouchableOpacity } from 'react-native';
import Gatinho from './src/components/Gatinho';
import { styles } from './styles'

export default function App() {

  function amei () {
    alert("Te amo! 😍")
  }

  function curtir () {
    alert("Like Like 🎶")
  }

  return (
    <View  style={styles.container}>
      <ScrollView>
      <Text style={styles.texto}>Aula 02</Text>
      <Gatinho nome="Pingo 😻"/>
      <Button onPress={() => {curtir()}} title='Curtir' color={"orange"}></Button>
      <TouchableOpacity onPress={() => {amei()}} style={styles.botao}><Text style={styles.texto}>❤</Text></TouchableOpacity>
    </ScrollView>
    </View>
  );
}
