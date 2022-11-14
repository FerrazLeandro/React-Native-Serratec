import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

// export default function App() {
//   const [nome, setNome] = useState("")
//   const [isTrue, setIsTrue] = useState(false)
//   const [imagem, setImagem] = useState("")

//   const clique = () => {
//     setIsTrue(!isTrue)
//     if (isTrue) {
//       setImagem("https://reactnative.dev/img/tiny_logo.png")
//     } else {
//       setImagem("https://res.cloudinary.com/practicaldev/image/fetch/s--W1T6Rsuy--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/802/810a339f-085d-43d2-adac-be3c3c1ec611.png")
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.texto}>Aula 03</Text>
//        <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png"}} 
//         style={{ width: 50, height: 50}}
//       />
//       <Image source={require('./assets/favicon.png')}
//       style={styles.imagem}
//       />
//       <Image source={{ uri: imagem}} 
//         style={{ width: 50, height: 50}}
//       />
//       <Text style={styles.texto}>Texto: {nome}</Text>
//       <Text>{ isTrue ? "É verdadeiro" : "É falso"}</Text>
//       <Button style={styles.texto} title='Clique' onPress={clique}></Button>
//       <TextInput 
//         style={styles.campoTexto} 
//         placeholder='Nome do gatinho: ' 
//         keyboardType='default' 
//         onChangeText={setNome}
//         value={nome}
//         />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   texto: {
//     fontSize: 40,
//   },
//   campoTexto: {
//     backgroundColor: '#000',
//     margin: 30,
//     width: '80%',
//     color: 'white',
//   }, 
//   imagem: {
//     width: 50,
//     heigth: 50
//   }


// });

const Flexbox = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>FLEXBOX</Text>
            <View style={styles.superior}></View>
            <View style={styles.meio}></View>
            <View style={styles.inferior}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    }, 
    texto: {
      color: '#FFFFFF',
      fontSize: 50,
      textAlign: 'center',
      marginBottom: 100
    },
    superior: {
      height: 50,
      width: 50,
      backgroundColor: 'white',
    },
    meio: {
      height: 75,
      width: 75,
      backgroundColor: 'blue',
    },
    inferior: {
      height: 100,
      width: 100,
      backgroundColor: 'darkblue'
    }
})

export default Flexbox


