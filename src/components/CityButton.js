import React from 'react';

//native 
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default ({setState,city , setMarkes})=>{
  const changeCity = (lat,long)=>{
    setState({
      region:{
        latitude: lat,
        longitude: long,
        latitudeDelta:0.0015,
        longitudeDelta:0.0121
      }
    })
  }
  return(
    <TouchableOpacity style={styles.localBtn} onPress={() => { changeCity(city.lat,city.long); setMarkes(0) }}>
      <Text style={styles.localText}>{city.name}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  localBtn: { 
    width: '100%',
    backgroundColor: '#FF0000',
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  localText: { 
    color: '#Fff'
  }
});
