import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

const todosProdutos = [
  { id: '1', nome: 'iPhone 15 Pro', categoria: 'Smartphone' },
  { id: '2', nome: 'MacBook Air M3', categoria: 'Notebook' },
  { id: '3', nome: 'AirPods Pro', categoria: 'Fone' },
  { id: '4', nome: 'iPad Pro', categoria: 'Tablet' },
  { id: '5', nome: 'Apple Watch', categoria: 'Smartwatch' },
  { id: '6', nome: 'Samsung S24', categoria: 'Smartphone' },
  { id: '7', nome: 'Dell XPS 15', categoria: 'Notebook' },
  { id: '8', nome: 'Sony WH-1000', categoria: 'Fone' },
  { id: '9', nome: 'Nintendo Switch', categoria: 'Game' },
  { id: '10', nome: 'Kindle', categoria: 'E-reader' },
];

export default function Buscar() {
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);
  const [buscou, setBuscou] = useState(false);

  function pesquisar(texto) {
    setBusca(texto);
    if (texto.length > 0) {
      const filtrados = todosProdutos.filter(
        (p) =>
          p.nome.toLowerCase().includes(texto.toLowerCase()) ||
          p.categoria.toLowerCase().includes(texto.toLowerCase())
      );
      setResultados(filtrados);
      setBuscou(true);
    } else {
      setResultados([]);
      setBuscou(false);
    }
  }

  function limpar() {
    setBusca('');
    setResultados([]);
    setBuscou(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        <Text style={styles.titulo}>🔍 Buscar Produto</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome ou categoria..."
            placeholderTextColor="#7FB593"
            value={busca}
            onChangeText={pesquisar}
          />
          {busca.length > 0 && (
            <TouchableOpacity style={styles.clearBtn} onPress={limpar}>
              <Text style={styles.clearText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {buscou && (
        <Text style={styles.info}>
          {resultados.length > 0
            ? `${resultados.length} resultado(s) encontrado(s)`
            : 'Nenhum produto encontrado'}
        </Text>
      )}

      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.resultNome}>{item.nome}</Text>
            <Text style={styles.resultCategoria}>{item.categoria}</Text>
          </View>
        )}
        ListEmptyComponent={
          !buscou ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>📦</Text>
              <Text style={styles.emptyText}>Digite algo para buscar</Text>
            </View>
          ) : null
        }
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7214dd',
  },
  searchArea: {
    backgroundColor: '#8f40e9',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#9c50f3',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#985cdd',
  },
  clearBtn: {
    marginLeft: 10,
    backgroundColor: '#944ce6',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    color: '#7FB593',
    fontSize: 13,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  list: {
    padding: 16,
  },
  resultItem: {
    backgroundColor: '#1E4A2B',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#3D6B4F',
  },
  resultNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  resultCategoria: {
    fontSize: 13,
    color: '#00E08A',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    color: '#7FB593',
  },
});