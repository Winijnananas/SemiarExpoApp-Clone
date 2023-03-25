import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import UserScreen from "../screens/UserScreen";
import HomeScreen from "../screens/HomeScreen";
import GraphScreen from "../screens/GraphScreen";
import DemoCalculator from "../screens/DemoCalculator";
import FirstScreen from "../screens/FirstScreen";
import RoundScreen from "../screens/RoundScreen";


const Tab = createBottomTabNavigator();

// #1B1B1B

export default function TabNavigation() {
    return (

        // <Tab.Navigator
        //     screenOptions={{ headerShown: false, tabBarActiveTintColor: '#FFFF', tabBarInactiveTintColor: '#8C1E14', tabBarStyle: { backgroundColor: '#F25C05', borderBottomColor: 'black' } }}>
        //     <Tab.Screen
                
        //         name="หน้าหลัก"
        //         component={HomeScreen}
        //         options={{
        //             tabBarShowLabel: true,
        //             tabBarIcon: ({ color, size }) => (
        //                 //<MaterialCommunityIcons name="home" color={color} size={size} />
        //                 <MaterialCommunityIcons name="home" color={color} size={size} />
        //             ),
        //         }}
        //     />
        //  <Tab.Navigator
        //     screenOptions={{ headerShown: false, tabBarActiveTintColor: '#FFFF', tabBarInactiveTintColor: '#8C1E14', tabBarStyle: { backgroundColor: '#F25C05', borderBottomColor: 'black',padding:10 } }}>
        //     <Tab.Screen
                
        //         name="หน้าหลัก"
        //         component={FirstScreen}
        //         options={{
        //             tabBarShowLabel: true,
        //             tabBarIcon: ({ color, size }) => (
        //                 //<MaterialCommunityIcons name="home" color={color} size={size} />
        //                 <MaterialCommunityIcons name="home-variant" color={color} size={size} />
        //             ),
        //         }}
        //     /> 
            <Tab.Navigator
            screenOptions={{ headerShown: false, tabBarActiveTintColor: '#FFFF', tabBarInactiveTintColor: '#8C1E14', tabBarStyle: { backgroundColor: '#F25C05', borderBottomColor: 'black',padding:10 } }}>
            <Tab.Screen
                
                name="หน้าหลัก"
                component={RoundScreen}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        //<MaterialCommunityIcons name="home" color={color} size={size} />
                        <MaterialCommunityIcons name="home-variant" color={color} size={size} />
                    ),
                }}
            /> 
            <Tab.Screen
                name='เเนวโน้ม'
                component={GraphScreen}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        // <Icon solid name="id-card" color={color} size={size} />
                        //<MaterialCommunityIcons name="account" color={color} size={size} />
                        <MaterialCommunityIcons name="chart-line" color={color} size={size} />
                        
                    ),
                }}
            />
            <Tab.Screen
                name='คำนวณผล'
                component={DemoCalculator}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        // <Icon solid name="id-card" color={color} size={size} />
                        //<MaterialCommunityIcons name="account" color={color} size={size} />
                        <MaterialCommunityIcons name="alpha-c-circle-outline" color={color} size={size} />
                        
                    ),
                }}
            />
            <Tab.Screen
                name='ผู้ใช้'
                component={UserScreen}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        // <Icon solid name="id-card" color={color} size={size} />
                        //<MaterialCommunityIcons name="account" color={color} size={size} />
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                        
                    ),
                }}
            />
        </Tab.Navigator>
    );
}