import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';

import Params from './src/params'
import { MainContainer } from './App.styles';

import Field from './src/components/Field/Field';

export default function App() {
  return (
    <MainContainer >
      <Text>Tamanho da grade: {Params.getRowsAmount()}x{Params.getColumsAmount()} </Text>
      <Field />
      <Field opened={true}/>
      <Field opened={true} nearMines={1}/>
      <Field opened={true} nearMines={3}/>
      <Field opened={true} nearMines={6}/>
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
