import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>ℹ️</Text>
        <Text style={styles.title}>Sobre</Text>
        <Text style={styles.subtitle}>Informações do App</Text>

        <View style={styles.card}>
          <Text style={styles.cardRow}>📱 <Text style={styles.cardValue}>aula08_DrawerNav03</Text></Text>
          <Text style={styles.cardRow}>🗂️ <Text style={styles.cardValue}>Drawer + Tab Navigation</Text></Text>
          <Text style={styles.cardRow}>📚 <Text style={styles.cardValue}>Capítulo 8 — React Native</Text></Text>
          <Text style={styles.cardRow}>🔢 <Text style={styles.cardValue}>Versão 1.0.0</Text></Text>
        </View>

        <Text style={styles.description}>
          Este app combina dois tipos de navegação:{'\n'}
          Drawer Navigation e Tab Navigation.
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
    color: '#AED6F1',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#1F618D',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    gap: 10,
  },
  cardRow: {
    fontSize: 14,
    color: '#D6EAF8',
  },
  cardValue: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 15,
    color: '#AED6F1',
    textAlign: 'center',
    lineHeight: 26,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#154360',
  },
  footerText: {
    color: '#AED6F1',
    fontSize: 12,
  },
});