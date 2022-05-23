import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Exercicios from './exercicios'
import HomeStack from './exercicesTemp/Navegacao2/HomeStack'
import Home from './exercicesTemp/Navegacao2/Home';
import Sobre from  './exercicesTemp/Navegacao2/Sobre'
import Contato from './exercicesTemp/Navegacao2/Contato';
import Feather from 'react-native-vector-icons/Feather'
export default function App() {
    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>

      
      <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#ff0000',
        tabBarStyle:{
          backgroundColor:'#fff',
          borderTopWidth:0
        }
      }}>
        <Tab.Screen name='Home' component={HomeStack} options={{
          tabBarIcon:({color,size})=>{
            return <Feather name='home'  size={size} color={color} />
          }
        }}/>
        <Tab.Screen name='Sobre' component={Sobre} options={{
          tabBarIcon:({color,size})=>{
            return <Feather name='info'  size={size} color={color} />
          }
        }}/>
        <Tab.Screen name='Contato' component={Contato} options={{
          tabBarIcon:({color,size})=>{
            return <Feather name='user'  size={size} color={color} />
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


