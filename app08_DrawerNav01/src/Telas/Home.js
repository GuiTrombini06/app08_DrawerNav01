import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🏠</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Bem-vindo ao App!</Text>
        <Text style={styles.description}>
          Esta é a tela inicial do aplicativo.{'\n'}
          Use o menu lateral (Drawer) para navegar.
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>DRAWER NAVIGATION</Text>
        </View>
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
    color: '#90D69F',
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    color: '#B3E0B8',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  badge: {
    backgroundColor: '#00E08A',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  badgeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 1.5,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#641cc4',
  },
  footerText: {
    color: '#90D69F',
    fontSize: 12,
  },
});