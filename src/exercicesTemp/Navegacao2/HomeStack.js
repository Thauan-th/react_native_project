import React from 'react';
import { View } from 'react-native';
import Home from './Home';
import Contato from './Contato';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Navegacao2() {
    const Stack = createNativeStackNavigator()
 return (
    <Stack.Navigator>
    <Stack.Screen component={Home} name='HomeStack' />
    <Stack.Screen component={Contato} name='ContatoStack' />
  </Stack.Navigator>
  );
}