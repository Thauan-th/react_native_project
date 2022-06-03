//deps
import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';

//componentes
import { StyleSheet, Text, View } from 'react-native';
import Teste from './src/components'

//redux
import {createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import Reducers from './src/store'
const store = createStore(Reducers ,applyMiddleware(thunk) )

export default function App() {
  return (
    <Provider store={store} >
    <View style={styles.container}>
      <Text>Codando mobile</Text>
      <Teste />
      <StatusBar style="auto" hidden={true} />
    </View>
    </Provider>
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
