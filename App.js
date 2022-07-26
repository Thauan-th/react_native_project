import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Params from './src/params'
import { MainContainer } from './App.styles';

import Field from './src/components/Field';

export default function App() {
  return (
    <MainContainer >
      <Text>Tamanho da grade: {Params.getRowsAmount()}x{Params.getColumsAmount()} </Text>
      <Field />
      <StatusBar style="auto" hidden={true}/>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
