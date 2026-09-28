import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotaoCustom({ titulo, onPress, cor = '#4A90E2' }) {
  return (
    <TouchableOpacity style={[styles.botao, { backgroundColor: cor }]} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 6,
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});