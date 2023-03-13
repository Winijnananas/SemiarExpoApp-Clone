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

const Stack = createStackNavigator();

export default function () {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Regis" component={RegisterScreen}/>
            <Stack.Screen name="Tab" component={BottomTab} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Cal" component={DemoCalculator}/>
            <Stack.Screen name="Graph" component={GraphScreen} />




        </Stack.Navigator>

    );
}