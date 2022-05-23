import React from 'react';
import { View , StyleSheet , Text , Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Sobre() {
    
    const navigate = useNavigation()

return (
   <View style={styles.container}>
     <Text>Sobre</Text>
     <Button title='Contato' onPress={()=>navigate.navigate('Contato')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ 
    flex:1,
    alignContent:'center',
    justifyContent:'center'
  }
})