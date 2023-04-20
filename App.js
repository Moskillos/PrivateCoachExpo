import Welcome from './screens/Welcome/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationPage from './screens/RegistrationScreen';
import ServiceDetailsScreen from './screens/Services/ServiceDetailsScreen';
import LezioniPrivate from './screens/Services/LezioniPrivate';
import Corsi from './screens/Services/Corsi';
import PersonalTrainerServices from './screens/Services/PersonalTrainerServices';
import Tutorial from './screens/Services/Tutorial';
import Anamnesi from './screens/FormAnamnesi/Anamnesi';
import Buy from './screens/Buy.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/TabScreens/Home';
import ProfileScreen from './screens/TabScreens/ProfileScreen';
import { Provider } from 'react-redux';
import store from './store';
import { HandleEnergyPage } from './screens/HandleEnergyPage';
import { TimerScreen } from './screens/TimersScreen';
import { Diary } from './screens/TabScreens/Diary';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const TabNavigation = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen component={Home} name={'Home'}/>
        <Tab.Screen component={Diary} name={'Diary'}/>
        <Tab.Screen component={ProfileScreen} name={'Profile'}/>
      </Tab.Navigator>
    )
  }

  
  return (   
    <Provider store={store}>  
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name='Welcome' component={Welcome} />
              <Stack.Screen name='Registration' component={RegistrationPage} />
              <Stack.Screen name='TabNav' component={TabNavigation}/>
              <Stack.Screen name='ServiceDetails' component={ServiceDetailsScreen} options={{headerShown: true}}/>
              <Stack.Screen name='Lezioni Private' component={LezioniPrivate} options={{headerShown: true}}/>
              <Stack.Screen name='Corsi' component={Corsi} options={{headerShown: true}}/>              
              <Stack.Screen name='PersonalTrainerServices' component={PersonalTrainerServices} options={{headerShown: true}}/>
              <Stack.Screen name='Tutorial' component={Tutorial} options={{headerShown: true}}/>              
              <Stack.Screen name='Buy' component={Buy} options={{headerShown: true}}/>
              <Stack.Screen name='AnamnesiCliente' component={Anamnesi}/>
              <Stack.Screen name='HandleEnergyPage' component={HandleEnergyPage} options={{headerShown: true, title: 'Gestisci il tuo apporto calorico'}}/>
              <Stack.Screen name='Timer' component={TimerScreen} options={{headerShown: true}}/>
            </Stack.Navigator>
          </NavigationContainer> 
        </Provider>  
  );
}

