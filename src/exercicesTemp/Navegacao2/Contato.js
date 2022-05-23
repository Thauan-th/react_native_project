import React from 'react';
import { View , StyleSheet , Text , Button} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Contato() {
    const navigate = useNavigation()
    const Route = useRoute()
    if(Route.teste){
        alert(Route.teste)
    }
    return (
   <View style={styles.container}>
     <Text>Contato</Text>
     <Button title='Home' onPress={()=>navigate.navigate('HomeStack' )}  /> 
     <Button title='Voltar' onPress={()=>navigate.goBack()}  /> 
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