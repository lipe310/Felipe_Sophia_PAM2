import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import BotaoCustom from '../components/BotaoCustom';

export default function ListScreen() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([
    { id: '1', nome: 'Estudar React Native' },
    { id: '2', nome: 'Praticar cálculos' },
  ]);

  const adicionar = () => {
    if (!item.trim()) return;
    const novo = { id: Date.now().toString(), nome: item };
    setLista([...lista, novo]);
    setItem('');
  };

  const remover = (id) => {
    setLista(lista.filter((i) => i.id !== id));
  };

  const limparTudo = () => setLista([]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📋 Lista de Itens</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um item..."
        value={item}
        onChangeText={setItem}
      />
      <BotaoCustom titulo="Adicionar" onPress={adicionar} />

      <FlatList
        data={lista}
        keyExtractor={(i) => i.id}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>{item.nome}</Text>
            <Text style={styles.remover} onPress={() => remover(item.id)}>
              ❌
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', color: '#999' }}>
            Nenhum item cadastrado.
          </Text>
        }
      />

      {lista.length > 0 && (
        <BotaoCustom titulo="Limpar Tudo" onPress={limparTudo} cor="#E94E77" />
      )}
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginVertical: 5,
  },
  itemTexto: { fontSize: 16, color: '#333' },
  remover: { fontSize: 16 },
});