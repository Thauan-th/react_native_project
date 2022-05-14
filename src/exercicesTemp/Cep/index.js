import axios from 'axios';
import React from 'react';
import { View ,TextInput , Text , SafeAreaView , Button , StyleSheet} from 'react-native';

export default function Cep() {
    const [cep ,setCep] = React.useState("")
    const [endereco , setEndereco]= React.useState("")
    const url = `https://viacep.com.br/ws`
    const inputRef  = React.useRef()

    function buscarCep(){
        if(cep.length === 8){
            axios.get(`${url}/${cep}/json/`).then(resp=>setEndereco(resp.data))
            setCep("")
            return inputRef.current.focus() 
        }
        alert('DIGITE UM CEP VALIDO')
        limparInput()
        return
    }
    function limparInput(){
        setCep("")
        setEndereco("")
        inputRef.current.focus()
        return
    }



 return (
   <SafeAreaView>
       <Text style={{backgroundColor:"#000",color:'#fff',textAlign:'center', fontSize:40}}>Buscador CEP</Text>
       <TextInput style={styles.input_cep} onChangeText={e=>setCep(e)} value={cep} keyboardType={'numeric'} 
        placeholder="Buscar CEP" ref={inputRef}
       ></TextInput>
       <Button onPress={buscarCep} title='buscar'></Button>
       <Button onPress={limparInput} title='Limpar'  color={"red"}></Button>
       {
           endereco !=="" &&
           <>
               <Text>{endereco.logradouro}</Text>
               <Text>{endereco.ddd}</Text>
               <Text>{endereco.bairro}</Text>
               <Text>{endereco.uf}</Text>
               <Text>{endereco.localidade}</Text>
           </>
       }
   </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    input_cep:{
      color:"blue",
      height:100,
      fontSize:40,
      borderRadius:100
    }
  
    
  });