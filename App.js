import React from 'react'

import App from './src'

//expo
import { StatusBar } from 'expo-status-bar';

//native-base
import { StyleSheet, Text, View } from 'react-native';

//redux
import { legacy_createStore as  createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import Reducers from './src/store'
const store = createStore(Reducers ,applyMiddleware(thunk) )

export default () => {
  return (
    <Provider store={store} >
    <App/>
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