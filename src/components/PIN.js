import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default ()=>{
  return(
    <View style={[styles.viewMarker, { backgroundColor: this.props.marker.pinColor }]}>
        <Text style={styles.textMarker}>{this.props.marker.warning}</Text>
      </View>
  )
}
const styles = StyleSheet.create({ 
  viewMarker: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  textMarker: {
    color: '#FFFFFF',
  }

})