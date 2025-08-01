import { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: "#AA2200",
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  resultText: {
    fontSize: 20,
    color: "#121212",
    marginTop: 10
  }
});

export default function BitolaApp() {
  const [corrente, setCorrente] = useState("");
  const [distancia, setDistancia] = useState("");
  const [bitola110, setBitola110] = useState(null);
  const [bitola220, setBitola220] = useState(null);

  const calcularBitola = () => {
    const correnteNum = parseFloat(corrente);
    const distanciaNum = parseFloat(distancia);

    if (isNaN(correnteNum) || isNaN(distanciaNum)) {
      alert("Digite valores válidos para corrente e distância.");
      return;
    }

    const resultado110 = (2 * correnteNum * distanciaNum) / 294.64;
    const resultado220 = (2 * correnteNum * distanciaNum) / 510.4;

    setBitola110(resultado110.toFixed(2));
    setBitola220(resultado220.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Bitola</Text>

      <TextInput
        placeholder="Corrente (A)"
        style={styles.input}
        keyboardType="numeric"
        value={corrente}
        onChangeText={setCorrente}
      />

      <TextInput
        placeholder="Distância (m)"
        style={styles.input}
        keyboardType="numeric"
        value={distancia}
        onChangeText={setDistancia}
      />

      <Button title="Calcular Bitola" onPress={calcularBitola} />

      {bitola110 && bitola220 && (
        <>
          <Text style={styles.resultText}>Bitola para 110V: {bitola110} mm²</Text>
          <Text style={styles.resultText}>Bitola para 220V: {bitola220} mm²</Text>
        </>
      )}
    </View>
  );
}
