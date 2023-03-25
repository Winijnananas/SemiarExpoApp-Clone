import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import GraphScreen from '../screens/GraphScreen';
import BottomTab from '../navigations/BottomTab';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DemoCalculator from '../screens/DemoCalculator';
import FirstScreen from '../screens/FirstScreen';
import InsideScreen from '../screens/InsideScreen';
import EditScreen from '../screens/EditScreen';
import RoundScreen from '../screens/RoundScreen';


const Stack = createStackNavigator();

export default function () {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Regis" component={RegisterScreen}/>
            <Stack.Screen name="Tab" component={BottomTab} />
            <Stack.Screen name="Round" component={RoundScreen}/>
            <Stack.Screen name="Home" component={FirstScreen} />
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Edit" component={EditScreen}/>
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Cal" component={DemoCalculator}/>
            <Stack.Screen name="Graph" component={GraphScreen} />
            <Stack.Screen name="Detail" component={InsideScreen}/>
        
            {/* <Stack.Screen name="Editer" component={EditScreen}/> */}
            




        </Stack.Navigator>

    );
}