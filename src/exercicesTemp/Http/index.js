import React from 'react';
import { View ,  StyleSheet , FlatList , Text} from 'react-native';
import api_client from '../../services/api_client';
import Filmes from './Filmes';
export default function HTTPSS() {
    const [filmes,setFilmes] = React.useState()
    React.useEffect(()=>{
        const filmesFetched = getFilms()
        setFilmes(filmesFetched)
    },[])
    async function getFilms(){
        const data = await api_client.get('r-api/?api=filmes')
      return data
    }

 return (
   <View style={styles.container}>
       <Text>OI</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1 
    }
})