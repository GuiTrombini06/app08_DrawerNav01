import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Detalhes({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerEmoji}>📋</Text>
        <Text style={styles.headerTitle}>Detalhes</Text>
        <Text style={styles.headerSub}>Tela acessada via Stack Navigation</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre esta tela</Text>
        <Text style={styles.sectionText}>
          Esta tela de Detalhes é acessada através da{' '}
          <Text style={styles.highlight}>Navegação por Pilha (Stack Navigation)</Text>,
          a partir da tela Home.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tipos de Navegação no App</Text>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>📋</Text>
          <View>
            <Text style={styles.navTitle}>Stack Navigation</Text>
            <Text style={styles.navDesc}>Home → Detalhes (esta tela)</Text>
          </View>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>📑</Text>
          <View>
            <Text style={styles.navTitle}>Tab Navigation</Text>
            <Text style={styles.navDesc}>Home | Sobre | Contato</Text>
          </View>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>☰</Text>
          <View>
            <Text style={styles.navTitle}>Drawer Navigation</Text>
            <Text style={styles.navDesc}>Menu lateral deslizante</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Voltar para Home</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Guilherme Trombini - {new Date().getFullYear()}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1916d1',
  },
  header: {
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#1b18ac',
  },
  headerEmoji: {
    fontSize: 56,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  headerSub: {
    fontSize: 14,
    color: '#FDEBD0',
    textAlign: 'center',
  },
  section: {
    margin: 16,
    backgroundColor: '#1916d1',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#3D6550',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00E08A',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionText: {
    fontSize: 14,
    color: '#AEB6BF',
    lineHeight: 22,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#00E08A',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3D6550',
  },
  navIcon: {
    fontSize: 24,
    marginRight: 14,
    width: 32,
    textAlign: 'center',
  },
  navTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  navDesc: {
    fontSize: 12,
    color: '#7F8C8D',
  },
  backButton: {
    margin: 16,
    backgroundColor: '#00E08A',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  backText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#7F8C8D',
    fontSize: 12,
  },
});