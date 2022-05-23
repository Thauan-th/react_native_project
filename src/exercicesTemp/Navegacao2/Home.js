import React from 'react';
import { View , StyleSheet , Text ,Button } from 'react-native';
import { useNavigation , useRoute } from '@react-navigation/native';
export default function Home() {
  const navigation = useNavigation()
  const Route = useRoute
  if(Route.func){
    alert(Route.func)
  }

 return (
   <View style={styles.container}>
     <Text>Home</Text>
     <Button  title='Contato' onPress={()=>navigation.navigate('ContatoStack',{teste:'ok'})} /> 

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