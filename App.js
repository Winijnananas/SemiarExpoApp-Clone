import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/HomeScreen';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Sending']);

import Routers from './src/routers';

const Stack = createStackNavigator();

function App() {
  return (
      <>
      <StatusBar style='black'/>
      <NavigationContainer>
        <Routers/>
        
      </NavigationContainer>
      </>
 
  );
}
  export default App;
