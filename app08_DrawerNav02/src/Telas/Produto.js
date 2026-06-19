import { View, Text, StyleSheet, FlatList } from 'react-native';

const produtos = [
  { id: '1', nome: 'iPhone 15 Pro', categoria: 'Smartphone', preco: 'R$ 7.999', icone: '📱' },
  { id: '2', nome: 'MacBook Air M3', categoria: 'Notebook', preco: 'R$ 12.499', icone: '💻' },
  { id: '3', nome: 'AirPods Pro', categoria: 'Fone', preco: 'R$ 2.199', icone: '🎧' },
  { id: '4', nome: 'iPad Pro 13"', categoria: 'Tablet', preco: 'R$ 9.499', icone: '📟' },
  { id: '5', nome: 'Apple Watch S9', categoria: 'Smartwatch', preco: 'R$ 3.599', icone: '⌚' },
  { id: '6', nome: 'Samsung S24 Ultra', categoria: 'Smartphone', preco: 'R$ 6.999', icone: '📲' },
  { id: '7', nome: 'Dell XPS 15', categoria: 'Notebook', preco: 'R$ 11.999', icone: '🖥️' },
  { id: '8', nome: 'Sony WH-1000XM5', categoria: 'Fone', preco: 'R$ 1.899', icone: '🎵' },
  { id: '9', nome: 'Nintendo Switch', categoria: 'Game', preco: 'R$ 2.499', icone: '🎮' },
  { id: '10', nome: 'Kindle Paperwhite', categoria: 'E-reader', preco: 'R$ 699', icone: '📚' },
];

export default function Produtos() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemIcon}>{item.icone}</Text>
      <View style={styles.itemInfo}>
        <Text style={styles.itemNome}>{item.nome}</Text>
        <Text style={styles.itemCategoria}>{item.categoria}</Text>
      </View>
      <Text style={styles.itemPreco}>{item.preco}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nossos Produtos</Text>
        <Text style={styles.headerSub}>{produtos.length} itens disponíveis</Text>
      </View>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7214dd',
  },
  header: {
    padding: 20,
    backgroundColor: 'rgb(141, 23, 219)',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00E08A',
  },
  headerSub: {
    fontSize: 13,
    color: '#7FB593',
    marginTop: 2,
  },
  list: {
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7214dd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#7214dd',
  },
  itemIcon: {
    fontSize: 28,
    marginRight: 14,
  },
  itemInfo: {
    flex: 1,
  },
  itemNome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  itemCategoria: {
    fontSize: 12,
    color: '#7FB593',
  },
  itemPreco: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00E08A',
  },
});