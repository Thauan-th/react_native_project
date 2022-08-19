import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthContextProvider from './src/store';
import Navigator from './src/Navigator';


export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Navigator />
      </AuthContextProvider>
    </NavigationContainer>
  );
}