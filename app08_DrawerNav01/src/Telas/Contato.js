import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Contato() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>📬</Text>
        <Text style={styles.title}>Contato</Text>
        <Text style={styles.subtitle}>Entre em Contato</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>📧 E-mail</Text>
          <Text style={styles.infoValue}>guicastroyt@gmail.com</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>📱 Telefone</Text>
          <Text style={styles.infoValue}>(41) 99838-3103</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>📍 Localização</Text>
          <Text style={styles.infoValue}>Brasil</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar Mensagem</Text>
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
    backgroundColor: '#FAFAFA',
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
    color: '#641cc4',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#555555',
    marginBottom: 24,
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 13,
    color: '#888888',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A2E',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#641cc4',
    paddingHorizontal: 40,
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
    backgroundColor: '#EEEEEE',
  },
  footerText: {
    color: '#888888',
    fontSize: 12,
  },
});