import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Splash from './pages/splash';
import Home from './pages/home';
import Heroi from './pages/Heroi';
const Stack = createDrawerNavigator();

export default function App() {

  
  return (

<NavigationContainer>      
<Stack.Navigator initialRouteName="Splash">
<Stack.Screen name='Splash' component={Splash} options={{headerTransparent:true, headerTitle:'', headerSearchBarOptions:false}}/>
<Stack.Screen name='Login' component={Login}options={{headerTransparent:true, headerTitle:'', headerSearchBarOptions:false}}/>
<Stack.Screen name='Cadastro' component={Cadastro}options={{headerTransparent:true, headerTitle:'', headerSearchBarOptions:false}}/>
<Stack.Screen name='Home' component={Home}options={{headerTransparent:true, headerTitle:'', headerSearchBarOptions:false}}/>
<Stack.Screen name='Heroi' component={Heroi}options={{headerTransparent:true, headerTitle:'', headerSearchBarOptions:false}}/>
</Stack.Navigator>


      </NavigationContainer>
   
   
  );
}