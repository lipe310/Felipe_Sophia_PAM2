import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotaoCustom from '../components/BotaoCustom';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🚀 Meu App React Native</Text>
      <Text style={styles.subtitulo}>Escolha uma funcionalidade:</Text>

      <BotaoCustom
        titulo="🧮 Calculadora"
        onPress={() => navigation.navigate('Calculadora')}
      />
      <BotaoCustom
        titulo="📋 Lista de Itens"
        onPress={() => navigation.navigate('Lista')}
        cor="#7B68EE"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F5F7FA',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
});