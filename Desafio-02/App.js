import { Text, View, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
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
import styles from './styles';

export default function App() {
  
  function clique () {
    alert("Clicou!")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      {/* Header */}
      <View style={styles.header}>

        <View style={styles.headerCampos}>
          <View style={styles.headerFoto} >
            <TouchableOpacity onPress={() => clique()}>
              <Image source={Foto} style={styles.foto} />
            </TouchableOpacity>
          </View>

          <View style={styles.headerIcones}>
            <TouchableOpacity onPress={() => clique()}>
              <Olho name='eye' style={styles.iconesHeader}/>
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => clique()}>
              <Interrogacao name='question' style={styles.iconesHeader}/>
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => clique()}>
              <Convite name='adduser' style={styles.iconesHeader}/>
            </TouchableOpacity> 
          </View>

        </View>

        <Text style={styles.textoNome}>Olá, Leandro</Text>
      </View>

      {/* Saldo da conta  */}
      <View style={styles.saldo}>
        <TouchableOpacity onPress={() => clique()}>
          <View style={styles.saldoMenu}>
            <Text style={styles.textoSaldo}>Conta</Text>
            <Seta name='arrow-right' style={styles.iconeSaldo}/>
          </View>
          <Text style={styles.textoSaldo}>R$ 0,00</Text>
        </TouchableOpacity>
      </View>

      {/* Funcionalidades */}
      <View style={styles.funcionalidadesView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.funcionalidades}>
            <TouchableOpacity onPress={() => clique()}>
              <View style={styles.funcionalidadesCard}>
                  <Pix name='bank-transfer' style={styles.funcionalidadesIcones}/>
              </View>
              <View style={styles.funcionalidadesTexto}>
                <Text style={styles.funcionalidadesTexto}>Área Pix</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.funcionalidades}>
            <TouchableOpacity onPress={() => clique()}>
              <View style={styles.funcionalidadesCard}>
                  <CodigoBarras name='barcode' style={styles.funcionalidadesIcones}/>
              </View>
              <View style={styles.funcionalidadesTexto}>
                <Text style={styles.funcionalidadesTexto}>Pagar</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.funcionalidades}>
            <TouchableOpacity onPress={() => clique()}>
              <View style={styles.funcionalidadesCard}>
              <Transferir name='bank-transfer-out' style={styles.funcionalidadesIcones}/>
              </View>
              <View style={styles.funcionalidadesTexto}>
                <Text style={styles.funcionalidadesTexto}>Transferir</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.funcionalidades}>
            <TouchableOpacity onPress={() => clique()}>
              <View style={styles.funcionalidadesCard}>
                  <Depositar name='bank-transfer-in' style={styles.funcionalidadesIcones}/>
              </View>
              <View style={styles.funcionalidadesTexto}>
                <Text style={styles.funcionalidadesTexto}>Depositar</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.funcionalidades}>
            <TouchableOpacity onPress={() => clique()}>
              <View style={styles.funcionalidadesCard}>
                  <Celular name='smartphone' style={styles.funcionalidadesIcones}/>
              </View>
              <View style={styles.funcionalidadesTexto}>
                <Text style={styles.funcionalidadesTexto}>Recarga</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Meus cartões */}
      <TouchableOpacity onPress={() => clique()} style={styles.cartoes}>
        <Celular name='smartphone' style={styles.iconeCartoes}/>
        <Text style={styles.textoCartoes}>Meus cartões</Text>
      </TouchableOpacity>

      {/* Novidades */}
      <View style={styles.novidades}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => clique()}>
          <View style={styles.novidadesCard}>
            <Text style={styles.texto}>Chegou o débito automático no fechamento da fatura</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity onPress={() => clique()}>
          <View style={styles.novidadesCard}>
            <Text style={styles.texto}>Concorra a premios com o Nubank</Text>
          </View>
          </TouchableOpacity>
        </ScrollView>

      </View>

      {/* Cartão de crédito */}
      <View style={styles.credito}>
      <TouchableOpacity onPress={() => clique()}>
        <View style={styles.saldoMenu}>
          <Text style={styles.creditoTitulo}>Cartão de crédito</Text>
          <Seta name='arrow-right' style={styles.iconeSaldo}/>
        </View>
        <Text style={styles.creditoTexto}>Fatura atual</Text>
        <Text style={styles.creditoTitulo}>R$ 199,99</Text>
        <Text style={styles.creditoTexto}>Limite disponível de R$ 999,99</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clique()}>
        <Text style={styles.creditoParcelamento}>Parcelar compras</Text>
      </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
      <TouchableOpacity onPress={() => clique()}>
        <Transfer name='swap-vert' style={styles.footerIcones}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clique()}>
        <Cifrao name='attach-money' style={styles.footerIcones}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clique()}>
        <Compras name='bag' style={styles.footerIcones}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clique()}>
        <Futebol name='futbol' style={styles.footerIcones}/>
      </TouchableOpacity>

      </View>
    </View>
  );
}
