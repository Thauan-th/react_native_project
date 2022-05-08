import React from 'react';
import { View ,  StyleSheet , FlatList , Text , ActivityIndicator} from 'react-native';
import api_client from '../../services/api_client';
import Filmes from './Filmes';
export default function HTTPSS() {
    const [filmes,setFilmes] = React.useState()
    const [loading,setLoading] = React.useState(true)
    React.useEffect(()=>{
        getFilms()
    },[])
    async function getFilms(){
      await api_client.get('/r-api/?api=filmes').then(resp=>{
            setFilmes(resp.data)
            setLoading(false)
        })
    }
function onLoad(){
    if(!loading){
        return (
            <View >
                <FlatList data={filmes} keyExtractor={item=>String(item.id)} renderItem={({item})=><Filmes data={item}></Filmes>} />
         </View>         
        )
    }
    return <View style={{alignContent:'center' , justifyContent:'center', flex:1 , flexDirection:'column'}}><ActivityIndicator color='#097' size={40}/></View>
}

 return (
     
   <View >
    {onLoad()}
   </View>
  );
}
