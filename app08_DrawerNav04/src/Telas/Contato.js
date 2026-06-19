import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Contato() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>📬</Text>
        <Text style={styles.title}>Contato</Text>
        <Text style={styles.subtitle}>Fale Conosco</Text>

        <View style={styles.card}>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📧</Text>
            <View>
              <Text style={styles.infoLabel}>E-mail</Text>
              <Text style={styles.infoValue}>mateusbastos06@gmail.com</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📱</Text>
            <View>
              <Text style={styles.infoLabel}>Telefone</Text>
              <Text style={styles.infoValue}>(41) 98798-3483</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📍</Text>
            <View>
              <Text style={styles.infoLabel}>Localização</Text>
              <Text style={styles.infoValue}>Brasil</Text>
            </View>
          </View>
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
    color: '#85D99F',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#1916d1',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#3D6550',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoIcon: {
    fontSize: 24,
    marginRight: 14,
  },
  infoLabel: {
    fontSize: 12,
    color: '#7F8C8D',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#3D6550',
  },
  button: {
    backgroundColor: '#2EAA6D',
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
    backgroundColor: '#1916d1',
  },
  footerText: {
    color: '#85D99F',
    fontSize: 12,
  },
});