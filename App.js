import React from 'react'

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

export default function App() {
  return (
    <Provider store={store} >
    <View style={styles.container}>
      <Text>RN</Text>
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