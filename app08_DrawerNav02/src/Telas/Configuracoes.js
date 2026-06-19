import { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';

export default function Configuracoes() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [modoEscuro, setModoEscuro] = useState(true);
  const [ofertasEmail, setOfertasEmail] = useState(true);
  const [atualizacoes, setAtualizacoes] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>⚙️ Configurações</Text>
        <Text style={styles.headerSub}>Personalize sua experiência</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notificações</Text>

        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <Text style={styles.itemIcon}>🔔</Text>
            <View>
              <Text style={styles.itemTitle}>Notificações Push</Text>
              <Text style={styles.itemDesc}>Receber alertas do app</Text>
            </View>
          </View>
          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
            trackColor={{ false: '#3D6B4F', true: '#00E08A' }}
            thumbColor={notificacoes ? '#FFFFFF' : '#7FB593'}
          />
        </View>

        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <Text style={styles.itemIcon}>📧</Text>
            <View>
              <Text style={styles.itemTitle}>Ofertas por E-mail</Text>
              <Text style={styles.itemDesc}>Receber promoções</Text>
            </View>
          </View>
          <Switch
            value={ofertasEmail}
            onValueChange={setOfertasEmail}
            trackColor={{ false: '#3D6B4F', true: '#00E08A' }}
            thumbColor={ofertasEmail ? '#FFFFFF' : '#7FB593'}
          />
        </View>

        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <Text style={styles.itemIcon}>📰</Text>
            <View>
              <Text style={styles.itemTitle}>Newsletter</Text>
              <Text style={styles.itemDesc}>Novidades semanais</Text>
            </View>
          </View>
          <Switch
            value={newsletter}
            onValueChange={setNewsletter}
            trackColor={{ false: '#3D6B4F', true: '#00E08A' }}
            thumbColor={newsletter ? '#FFFFFF' : '#7FB593'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Aparência</Text>

        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <Text style={styles.itemIcon}>🌙</Text>
            <View>
              <Text style={styles.itemTitle}>Modo Escuro</Text>
              <Text style={styles.itemDesc}>Tema escuro do aplicativo</Text>
            </View>
          </View>
          <Switch
            value={modoEscuro}
            onValueChange={setModoEscuro}
            trackColor={{ false: '#3D6B4F', true: '#00E08A' }}
            thumbColor={modoEscuro ? '#FFFFFF' : '#7FB593'}
          />
        </View>

        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <Text style={styles.itemIcon}>🔄</Text>
            <View>
              <Text style={styles.itemTitle}>Atualizações Auto</Text>
              <Text style={styles.itemDesc}>Atualizar automaticamente</Text>
            </View>
          </View>
          <Switch
            value={atualizacoes}
            onValueChange={setAtualizacoes}
            trackColor={{ false: '#3D6B4F', true: '#00E08A' }}
            thumbColor={atualizacoes ? '#FFFFFF' : '#7FB593'}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>TechStore v1.0.0 - Guilherme Trombini - {new Date().getFullYear()}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7214dd',
  },
  header: {
    padding: 20,
    backgroundColor: '#5712a5',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSub: {
    fontSize: 13,
    color: '#7FB593',
    marginTop: 4,
  },
  section: {
    margin: 16,
    backgroundColor: '#8635e4',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#9544f1',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#00E08A',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#3D6B4F',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemIcon: {
    fontSize: 22,
    marginRight: 12,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  itemDesc: {
    fontSize: 12,
    color: '#7FB593',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#3A5070',
    fontSize: 12,
  },
});