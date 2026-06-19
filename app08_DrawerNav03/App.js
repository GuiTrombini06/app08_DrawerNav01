import 'react-native-gesture-handler';
import Home from './src/Telas/Home';
import Sobre from './src/Telas/Sobre';
import Contato from './src/Telas/Contato';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1F3D28',
          borderTopColor: '#3D6550',
          height: 60,
          paddingBottom: 8,
          paddingTop: 4,
        },
        tabBarActiveTintColor: '#2EAA6D',
        tabBarInactiveTintColor: '#7F8C8D',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTela"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SobreTela"
        component={Sobre}
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="info" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ContatoTela"
        component={Contato}
        options={{
          title: 'Contato',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="contact-mail" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Guias"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#593bdd',
            width: 250,
          },
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
          },
          drawerActiveTintColor: '#2EAA6D',
          drawerInactiveTintColor: '#7F8C8D',
          headerStyle: {
            backgroundColor: '#3c1bcf',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen
          name="Guias"
          component={TabNavigator}
          options={{
            title: 'Navegação por Guias',
            drawerIcon: ({ color }) => (
              <MaterialIcons name="tab" size={22} color={color} />
            ),
          }}
        />
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
          name="Sobre"
          component={Sobre}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="info" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contato"
          component={Contato}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="contact-mail" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;