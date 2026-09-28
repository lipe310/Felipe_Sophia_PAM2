import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import BotaoCustom from '../components/BotaoCustom';
import { calcular } from '../utils/calculos';

export default function CalcScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [resultado, setResultado] = useState('');

  const executar = (op) => {
    const r = calcular(op, a, b);
    setResultado(`Resultado: ${r}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🧮 Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Primeiro número"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        placeholder="Segundo número"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />

      <View style={styles.linha}>
        <BotaoCustom titulo="+" onPress={() => executar('+')} />
        <BotaoCustom titulo="-" onPress={() => executar('-')} cor="#E94E77" />
      </View>
      <View style={styles.linha}>
        <BotaoCustom titulo="×" onPress={() => executar('*')} cor="#F5A623" />
        <BotaoCustom titulo="÷" onPress={() => executar('/')} cor="#50E3C2" />
      </View>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#F5F7FA' },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  linha: { flexDirection: 'row', gap: 10, justifyContent: 'space-between' },
  resultado: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    color: '#2E86DE',
  },
});