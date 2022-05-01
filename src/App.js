import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import FlatListComponente from './exercicesTemp/FlatListComponente'
import Exercicios from './exercicios'
export default function App() {



  return (
    <View style={styles.container}>
      <Exercicios />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});
