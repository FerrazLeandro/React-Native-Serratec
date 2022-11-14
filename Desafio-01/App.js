import { StyleSheet, View, StatusBar } from "react-native";

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.azul} />
      <View style={styles.laranja} />
      <View style={styles.retanguloLaranja} />
      <View style={styles.meio}>
        <View style={styles.retanguloUm} />
        <View style={styles.retanguloDois} />
      </View>
      <View style={styles.azul} />
      <View style={styles.final} >
        <View style={styles.laranja} />
        <View style={styles.laranja} />
        <View style={styles.laranja} />
        <View style={styles.laranja} />
        <View style={styles.laranja} />
        <View style={styles.laranja} />
      </View>
      <View style={styles.rodape} />
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  azul: {
    backgroundColor: "cyan",
    width: "100%",
    height: 16,
  },
  laranja: {
    margin: 10,
    width: 90,
    height: 90,
    backgroundColor: "orange",
  },
  retanguloLaranja: {
    width: 150,
    height: 25,
    backgroundColor: "orange",
  },
  meio: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  retanguloUm: {
    width: "50%",
    height: 70,
    backgroundColor: "blueviolet"
  },
  retanguloDois: {
    width: "50%",
    height: 70,
    backgroundColor: "skyblue"
  },
  final: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    justifyContent: "center",
    margin: 25
  },
  rodape: {
    width: "100%",
    height: 50,
    backgroundColor: "skyblue",
    justifyContent: "flex-end",
},

});