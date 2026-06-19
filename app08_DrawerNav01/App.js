import 'react-native-gesture-handler';
import Home from './src/Telas/Home';
import Sobre from './src/Telas/Sobre';
import Contato from './src/Telas/Contato';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#641cc4',
            width: 240,
          },
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          drawerActiveTintColor: '#00E08A',
          drawerInactiveTintColor: '#AAAAAA',
          headerStyle: {
            backgroundColor: '#641cc4',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Contato" component={Contato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;