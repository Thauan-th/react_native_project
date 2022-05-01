import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import FlatListComponente from './exercicesTemp/FlatListComponente'
export default function App() {



  return (
    <View style={styles.container}>
      <FlatListComponente />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});
