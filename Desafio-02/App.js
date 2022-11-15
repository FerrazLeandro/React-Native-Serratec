import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Foto from './assets/Ferraz.png'
import Olho from 'react-native-vector-icons/SimpleLineIcons'
import Interrogacao from 'react-native-vector-icons/SimpleLineIcons'
import Convite from 'react-native-vector-icons/AntDesign'
import Seta from 'react-native-vector-icons/SimpleLineIcons'
import CodigoBarras from 'react-native-vector-icons/FontAwesome5'
import Celular from 'react-native-vector-icons/Feather'
import Transferir from 'react-native-vector-icons/MaterialCommunityIcons'
import Depositar from 'react-native-vector-icons/MaterialCommunityIcons'
import Pix from 'react-native-vector-icons/MaterialCommunityIcons'



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      {/* Header */}
      <View style={styles.header}>

        <View style={styles.headerCampos}>
          <View style={styles.headerFoto} >
            <Image source={Foto} style={styles.foto} />
          </View>

          <View style={styles.headerIcones}>
            <Olho name='eye' style={styles.iconesHeader}/>
            <Interrogacao name='question' style={styles.iconesHeader}/>
            <Convite name='adduser' style={styles.iconesHeader}/>
          </View>

        </View>

        <Text style={styles.textoNome}>Olá, Leandro</Text>
      </View>

      {/* Saldo da conta  */}
      <View style={styles.saldo}>
        <View style={styles.saldoMenu}>
          <Text style={styles.textoSaldo}>Conta</Text>
          <Seta name='arrow-right' style={styles.iconeSaldo}/>
        </View>
        <Text style={styles.textoSaldo}>R$: 0,00</Text>
      </View>

      {/* Funcionalidades */}
      <View style={styles.funcionalidadesView}>
        <View style={styles.funcionalidades}>
          <View style={styles.funcionalidadesIcones}>
              <Pix name='bank-transfer' style={styles.iconesHeader}/>
          </View>
          <View style={styles.funcionalidadesTexto}>
            <Text style={styles.textoSaldo}>Área Pix</Text>
          </View>
        </View>
        <View style={styles.funcionalidades}>
          <View style={styles.funcionalidadesIcones}>
              <CodigoBarras name='barcode' style={styles.iconesHeader}/>
          </View>
          <View style={styles.funcionalidadesTexto}>
            <Text style={styles.textoSaldo}>Pagar</Text>
          </View>
        </View>
        <View style={styles.funcionalidades}>
          <View style={styles.funcionalidadesIcones}>
          <Transferir name='bank-transfer-out' style={styles.iconesHeader}/>
          </View>
          <View style={styles.funcionalidadesTexto}>
            <Text style={styles.textoSaldo}>Transferir</Text>
          </View>
        </View>
        <View style={styles.funcionalidades}>
          <View style={styles.funcionalidadesIcones}>
              <Depositar name='bank-transfer-in' style={styles.iconesHeader}/>
          </View>
          <View style={styles.funcionalidadesTexto}>
            <Text style={styles.textoSaldo}>Depositar</Text>
          </View>
        </View>
        <View style={styles.funcionalidades}>
          <View style={styles.funcionalidadesIcones}>
              <Celular name='smartphone' style={styles.iconesHeader}/>
          </View>
          <View style={styles.funcionalidadesTexto}>
            <Text style={styles.textoSaldo}>Recarga de Celular</Text>
          </View>
        </View>
      </View>
      <View style={styles.container4}>
      <Text style={styles.texto}>Meus cartões</Text>

      </View>
      <View style={styles.container5}>
      <Text style={styles.texto}>Mensagens</Text>

      </View>
      <View style={styles.container6}>
      <Text style={styles.texto}>Cartão de crédito</Text>

      </View>
      <View style={styles.footer}>
      <Text style={styles.texto}>Footer</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textoNome: {
    fontSize: 14,
    color: '#fff',
  },
  header: {
    height: '15%',
    width: '100%',
    padding: 15,
    justifyContent: 'flex-start',
    backgroundColor: '#901abb',
  },
  headerCampos: {
    width: '100%',
    flexDirection: 'row',
  },
  headerFoto: {
    width: '50%',
  },
  foto: {
    width: 50,
    height: 50,
    marginRight: 15,
    size: 20,
    color: "#000",
    marginBottom: 30,
  },
  headerIcones: {
    width: '50%',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  iconesHeader :{
    color: "#FFF",
    fontSize: 25,
    margin: 15
  },
  saldo: {
    height: '15%',
    width: '100%',
    padding: 15,
  },
  saldoMenu : {
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textoSaldo: {
    fontWeight: '600',
    fontSize: 18,
  },
  iconeSaldo :{
    fontSize: 15,
    margin: 15,
  },
  funcionalidadesView: {
    padding: 15,
    height: '15%',
    width: '100%',
    flexDirection: 'row'
  }, 
  funcionalidadesIcones: {
    width: 65,
    height: 65,
    margin: 10,
    borderRadius: '100%',
    backgroundColor: 'silver',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  funcionalidadesTexto : {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container4: {
    height: '15%',
    width: '100%',
  },
  container5: {
    height: '10%',
    width: '100%',
  },
  container6: {
    height: '20%',
    width: '100%',
  },
  footer: {
    height: '10%',
    width: '100%',
  }
  

});
