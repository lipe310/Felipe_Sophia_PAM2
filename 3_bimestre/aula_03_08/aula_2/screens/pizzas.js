import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {

  const itens = [
    { id: '1', nome: 'Pizza de Queijo' },
    { id: '2', nome: 'Pizza de Marguerita' },
    { id: '3', nome: 'Pizza de Calabresa' },
    { id: '4', nome: 'Pizza de Frango' },
    { id: '5', nome: 'Pizza de Brocolis' },
    { id: '6', nome: 'Pizza de Chocolate' },
    { id: '7', nome: 'Pizza de Romeu & Julieta' },

  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Lista de pizzas
      </Text>

      <Text style={styles.subtitulo}>
       Os melhoes sabores
      </Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>
              {item.nome}
            </Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFDBBB',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    marginBottom: 20,
  },

  item: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },

  nome: {
    fontSize: 17,
  },
});

