import { StyleSheet } from 'react-native';

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
      backgroundColor: 'white',
    },
    footerIcones: {
      fontSize: 34,
      color: 'gray',
    }
  });

  export default styles;