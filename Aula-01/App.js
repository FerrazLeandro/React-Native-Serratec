import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olรก mundo! ๐</Text>
      <Text style={styles.texto}>Aula 01 ๐</Text>
      <Text style={styles.nome}>Leandro Ferraz ๐จโ๐</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  nome : {
    color: '#fff',
    textAlign: 'right',
    alignItems: 'flex-end'
  }
});
