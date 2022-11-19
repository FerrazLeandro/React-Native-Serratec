import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Detalhes = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>DETALHES</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.botaoTexto}>IR PARA HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 36,
  },
  botao: {
    backgroundColor: 'blue',
    borderRadius: 15,
    padding: 16,
    width: '80%'
  },
  botaoTexto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize:24
  },
});

export default Detalhes;
