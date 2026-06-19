import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.logo}>💻</Text>
        <Text style={styles.brand}>TechStore</Text>
        <Text style={styles.tagline}>Sua loja de tecnologia</Text>
      </View>

      <View style={styles.cardsRow}>
        <View style={styles.card}>
          <Text style={styles.cardIcon}>📱</Text>
          <Text style={styles.cardLabel}>Smartphones</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardIcon}>🖥️</Text>
          <Text style={styles.cardLabel}>Computadores</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardIcon}>🎧</Text>
          <Text style={styles.cardLabel}>Acessórios</Text>
        </View>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>🔥 Ofertas da Semana</Text>
        <Text style={styles.bannerText}>
          Até 40% de desconto em produtos selecionados!
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
    backgroundColor: '#7214dd',
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(145, 66, 236)',
  },
  logo: {
    fontSize: 60,
    marginBottom: 8,
  },
  brand: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7214dd',
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 16,
    color: '#7FB593',
    marginTop: 4,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  card: {
    backgroundColor: '#7214dd',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '30%',
    borderWidth: 1,
    borderColor: '#7214dd',
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 11,
    color: '#7FB593',
    textAlign: 'center',
  },
  banner: {
    margin: 16,
    backgroundColor: '#7214dd',
    borderRadius: 12,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#7214dd',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  bannerText: {
    fontSize: 14,
    color: '#7FB593',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#0A1F12',
  },
  footerText: {
    color: '#7FB593',
    fontSize: 12,
  },
});