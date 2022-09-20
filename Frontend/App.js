import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import { CLIENTES } from './Pages/Clientes/Clientes';
import { CADASTRAR } from './Pages/Cadastrar/Cadastrar';

const stack = createNativeStackNavigator()
import HOME from './Pages/Home/Home';

export default function App() {
    LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <stack.Navigator>
      
      <stack.Screen name='Home' component={HOME} options={{headerShown:false}} />
      <stack.Screen name='Clientes' component={CLIENTES} options={{headerShown:false}} />
      <stack.Screen name='Cadastrar' component={CADASTRAR} options={{headerShown:false}} />
      </stack.Navigator>
    </NavigationContainer>
      
    );
  
}
