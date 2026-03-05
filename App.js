import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './pages/login';
import Cadastro from './pages/cadastro';


const Stack = createDrawerNavigator();

export default function App() {

  
  return (

    <NavigationContainer>
      
<Stack.Navigator initialRouteName='Login'>

<Stack.Screen name='Login' component={Login}/>
<Stack.Screen name='Cadastro' component={Cadastro}/>

</Stack.Navigator>


      </NavigationContainer>
   
   
  );
}