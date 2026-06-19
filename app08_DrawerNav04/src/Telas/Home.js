import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🏠</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Página Inicial</Text>
        <Text style={styles.description}>
          Esta tela usa{' '}
          <Text style={styles.highlight}>Stack Navigation</Text>
          {'\n'}para navegar à tela de detalhes.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Detalhes')}
        >
          <Text style={styles.buttonText}>Ver Detalhes →</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Guilherme Trombini - {new Date().getFullYear()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1916d1',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#FDEBD0',
    marginBottom: 24,
  },
  description: {
    fontSize: 15,
    color: '#FDEBD0',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 32,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#00E08A',
  },
  button: {
    backgroundColor: '#00E08A',
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#1916d1',
  },
  footerText: {
    color: '#FDEBD0',
    fontSize: 12,
  },
});