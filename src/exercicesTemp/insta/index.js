import React from 'react';
import { View  ,  StyleSheet , Text  , Image , TouchableOpacity , FlatList} from 'react-native';
import Lista from './Lista'
const feed  =  [
    {
        id: 1,
        name: 'Instagram',
        imagem: 'https://instagram.foto/ig_logo.png',
        post : 'https://instagram.foto/post1.jpg',
        liked : false ,
        likes : '1.5k'
    },
    {
        id: 2,
        name: 'Thauan',
        imagem: 'https://instagram.foto/ig_logo.png',
        post : 'https://instagram.foto/post1.jpg',
        liked : true  ,
        likes : '3.5k'
    },
    {
        id: 3,
        name: 'Lveiga',
        imagem: 'https://instagram.foto/ig_logo.png',
        post : 'https://instagram.foto/post1.jpg',
        liked : true ,
        likes : '2.5k'
    },
    {
        id: 4,
        name: 'Teste',
        imagem: 'https://instagram.foto/ig_logo.png',
        post : 'https://instagram.foto/post1.jpg',
        liked : false ,
        likes : '1k'
    },
]

export default function Insta() {
 return (
    <View >
        <View style={styles.header}>
            <TouchableOpacity>
            {/* <Image source={require('../../IMG-20200910-WA0014.jpg')} style={styles.logo}/> */}
            </TouchableOpacity>
            <TouchableOpacity>
            {/* <Image source={require('../../IMG-20200910-WA0016.jpg')} style={styles.send}/> */}
            </TouchableOpacity>

            <FlatList data={feed}
                keyExtractor={item=>item.id}
            showsHorizontalScrollIndicator={false} renderItem={({item})=>{
                return <Lista data={item} />
            }}></FlatList>


        </View>
   </View>
  );
}
const  styles =  StyleSheet.create({
    container:{
        flex:1
    },
    header:{
           height:55,
        backgroundColor:'#FFF',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5,
        borderBottomWidth:0.2,
        shadowColor:'#000',
        elevation:1  
   
    },
    logo:{
        flex:1
    },
    send:{
        width:23,
        height:23
    }
})