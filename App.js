import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import Navbar from './views/Navbar';
import Screen1 from './views/Screen1';
import Screen2 from './views/Screen2';
import { Styles } from './views/Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Screen1' >
            <Stack.Screen name='Screen1' component={Screen1}
            options={{
              title:'Home',
              headerStyle:{
                backgroundColor:'skyblue'
              },
              headerTintColor:'white',
              headerTitleStyle:{
                fontWeight:'bold',
              },
              headerTitleAlign:'center',
            }}
             ></Stack.Screen>
             <Stack.Screen name='Screen2' component={Screen2} 
             options={{
              title:'Back',
              headerStyle:{
                backgroundColor:'black'
              },
              headerTintColor:'white',
              headerTitleStyle:{
                fontWeight:'bold',
              },
              //headerTitleAlign:'center',
            }}
             ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
  );
}

