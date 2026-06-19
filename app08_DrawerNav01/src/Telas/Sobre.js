import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>ℹ️</Text>
        <Text style={styles.title}>Sobre</Text>
        <Text style={styles.subtitle}>Sobre este Aplicativo</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>app08_DrawerNav01</Text>
          <Text style={styles.cardText}>Versão: 1.0.0</Text>
          <Text style={styles.cardText}>Tema: Drawer Navigation</Text>
          <Text style={styles.cardText}>Capítulo 8 — React Native</Text>
        </View>
        <Text style={styles.description}>
          Este app demonstra o uso da navegação por menu lateral (Drawer Navigation)
          com React Navigation.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}> Guilherme Trombini - {new Date().getFullYear()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#641cc4',
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
    color: '#A5D6A7',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#2E7D32',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#66BB6A',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#C8E6C9',
    marginBottom: 4,
  },
  description: {
    fontSize: 15,
    color: '#C8E6C9',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#641cc4',
  },
  footerText: {
    color: '#A5D6A7',
    fontSize: 12,
  },
});