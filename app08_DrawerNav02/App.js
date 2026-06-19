import 'react-native-gesture-handler';
import Home from './src/Telas/Home';
import Produtos from './src/Telas/Produtos';
import Buscar from './src/Telas/Buscar.js';
import Configuracoes from './src/Telas/Configuracoes';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#7214dd',
            width: 260,
          },
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
          },
          drawerActiveTintColor: 'rgb(113, 57, 243)',
          drawerInactiveTintColor: 'rgb(116, 94, 241)',
          headerStyle: {
            backgroundColor: '#7214dd',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="home" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Produtos"
          component={Produtos}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="devices" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Buscar"
          component={Buscar}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="search" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Configurações"
          component={Configuracoes}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="settings" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;