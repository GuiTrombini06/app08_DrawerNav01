import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🏠</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Página Inicial</Text>
        <Text style={styles.description}>
          Você pode navegar por esta tela tanto pelo{'\n'}
          <Text style={styles.highlight}>Menu Lateral (Drawer)</Text>{'\n'}
          quanto pelas{'\n'}
          <Text style={styles.highlight}>Guias na parte inferior (Tabs)</Text>
        </Text>
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
    backgroundColor: '#593bdd',
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
    color: '#85D99F',
    marginBottom: 24,
  },
  description: {
    fontSize: 15,
    color: '#A8E0B5',
    textAlign: 'center',
    lineHeight: 28,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#2EAA6D',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#4f30d6',
  },
  footerText: {
    color: '#85D99F',
    fontSize: 12,
  },
});