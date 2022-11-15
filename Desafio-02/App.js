import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from 'react-native';
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
import Transfer from 'react-native-vector-icons/MaterialIcons'
import Cifrao from 'react-native-vector-icons/MaterialIcons'
import Compras from 'react-native-vector-icons/SimpleLineIcons'
import Futebol from 'react-native-vector-icons/FontAwesome5'



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
        <Text style={styles.textoSaldo}>R$ 0,00</Text>
      </View>

      {/* Funcionalidades */}
      <View style={styles.funcionalidadesView}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.funcionalidades}>
          <View style={styles.funcionalidadesCard}>
              <Pix name='bank-transfer' style={styles.funcionalidadesIcones}/>
          </View>
          <View style={styles.funcionalidadesTexto}>
            <Text style={styles.funcionalidadesTexto}>Área Pix</Text>
          </View>
        </View>
        <View style={styles.funcionalidades}>
          <View style={styles.funcionalidadesCard}>
              <CodigoBarras name='barcode' style={styles.funcionalidadesIcones}/>
          </View>
          <View style={styles.funcionalidadesTexto}>
            <Text style={styles.funcionalidadesTexto}>Pagar</Text>
          </View>
        </View>
        <View style={styles.funcionalidades}>
          <View style={styles.funcionalidadesCard}>
          <Transferir name='bank-transfer-out' style={styles.funcionalidadesIcones}/>
          </View>
          <View style={styles.funcionalidadesTexto}>
            <Text style={styles.funcionalidadesTexto}>Transferir</Text>
          </View>
        </View>
        <View style={styles.funcionalidades}>
          <View style={styles.funcionalidadesCard}>
              <Depositar name='bank-transfer-in' style={styles.funcionalidadesIcones}/>
          </View>
          <View style={styles.funcionalidadesTexto}>
            <Text style={styles.funcionalidadesTexto}>Depositar</Text>
          </View>
        </View>
        <View style={styles.funcionalidades}>
          <View style={styles.funcionalidadesCard}>
              <Celular name='smartphone' style={styles.funcionalidadesIcones}/>
          </View>
          <View style={styles.funcionalidadesTexto}>
            <Text style={styles.funcionalidadesTexto}>Recarga</Text>
          </View>
        </View>
      </ScrollView>
      </View>

      {/* Meus cartões */}
      <View style={styles.cartoes}>
      <Celular name='smartphone' style={styles.iconeCartoes}/>
      <Text style={styles.textoCartoes}>Meus cartões</Text>

      </View>

      {/* Novidades */}
      <View style={styles.novidades}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.novidadesCard}>
            <Text style={styles.texto}>Chegou o débito automático no fechamento da fatura</Text>
          </View>
          <View style={styles.novidadesCard}>
            <Text style={styles.texto}>Concorra a premios com o Nubank</Text>
          </View>
        </ScrollView>

      </View>

      {/* Cartão de crédito */}
      <View style={styles.credito}>
        <View style={styles.saldoMenu}>
          <Text style={styles.creditoTitulo}>Cartão de crédito</Text>
          <Seta name='arrow-right' style={styles.iconeSaldo}/>
        </View>
        <Text style={styles.creditoTexto}>Fatura atual</Text>
        <Text style={styles.creditoTitulo}>R$ 199,99</Text>
        <Text style={styles.creditoTexto}>Limite disponível de R$ 999,99</Text>
        <Text style={styles.creditoParcelamento}>Parcelar compras</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
      <Transfer name='swap-vert' style={styles.footerIcones}/>
      <Cifrao name='attach-money' style={styles.footerIcones}/>
      <Compras name='bag' style={styles.footerIcones}/>
      <Futebol name='futbol' style={styles.footerIcones}/>

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
  textoNome: {
    fontSize: 14,
    color: '#fff',
  },
  saldo: {
    height: '13%',
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
  funcionalidadesCard: {
    width: 65,
    height: 65,
    margin: 10,
    borderRadius: '100%',
    backgroundColor: '#f0f1f5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  funcionalidadesIcones: {
    fontSize: 34,
  },
  funcionalidadesTexto: {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cartoes: {
    height: '20',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 25,
    backgroundColor: '#f0f1f5',
    borderRadius: 12,
  },
  iconeCartoes: {
    fontSize: 24,
  },
  textoCartoes: {
    margin: 15,
    fontWeight: '600'
  },
  novidades: {
    height: '10%',
    width: '90%',
    flexDirection: 'row',
  },
  novidadesCard: {
    borderRadius: 10,
    backgroundColor: '#f0f1f5',
    width: 250,
    height: 80,
    padding: 20,
    marginRight: 15
  },
  credito: {
    height: '20%',
    width: '90%',
  },
  creditoTitulo: {
    fontWeight: '600',
    fontSize: 18,
  },
  creditoTexto: {
    color: 'gray',
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 5
  },  
  creditoParcelamento: {
    width: 180,
    padding: 15,
    marginTop: 20,
    backgroundColor: '#f0f1f5',
    borderRadius: 30,
    fontWeight: '700',
    fontSize: 18,
  },
  footer: {
    padding: 15,
    height: 70,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: "thistle",
  },
  footerIcones: {
    fontSize: 34,
    color: 'gray',
  }
});
