import React from 'react';
import { View,Text ,Image} from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Filmes(data) {
  // const film_informations = data.data
  const {foto,nome} =data.data
  return (
   <View>
       <Text style={styles.titulo}>
           {nome} 
       </Text>
       <Image source={{uri: foto}} style={styles.capa} />
      <View style={styles.Areabotao}>
        <TouchableOpacity style={styles.botao} onPress={()=>{alert(nome)}}>
          <Text style={styles.botaoTexto}> Saiba +</Text>
        </TouchableOpacity>
      </View>
   </View>
  );
}
const styles = StyleSheet.create({
  card:{
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo:{
    fontSize: 18,
    padding: 15,
  },
  capa:{
    height: 250,
    zIndex: 2,
  },
  Areabotao:{
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9
  },
  botao:{
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,

  },
  botaoTexto:{
    textAlign: 'center',
    color: '#FFF'
  }
});