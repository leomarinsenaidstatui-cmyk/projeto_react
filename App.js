import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Splash from './pages/splash';
import Cep from "./pages/cep";


const Drawer = createDrawerNavigator();

export default function App() {

 
  return (

<NavigationContainer>      
<Drawer.Navigator initialRouteName="Splash" screenOptions={{headerTintColor:"white"}}>
<Drawer.Screen
  name='Splash'
  component={Splash}
  options={{
    headerTransparent: true,
    headerTitle: '',
    headerSearchBarOptions: false,
    drawerLabel: () => null,
    drawerItemStyle: { display: 'none' },
    swipeEnabled: false,
  }}
/>
<Drawer.Screen
  name='Login'
  component={Login}
  options={{
    headerTransparent: true,
    headerTitle: '',
    headerSearchBarOptions: false
  }}
/>
<Drawer.Screen
  name='Cadastro'
  component={Cadastro}
  options={{
    headerTransparent: true,
    headerTitle: '',
    headerSearchBarOptions: false
  }}
/>

<Drawer.Screen
  name='Cep'
  component={Cep}
  options={{
    headerTransparent: true,
    headerTitle: '',
    headerSearchBarOptions: false
  }}
/>
</Drawer.Navigator>
</NavigationContainer>

   
   
  );
}