import React from 'react';
import { View , StyleSheet , Button , Modal , Text} from 'react-native';

export default function Modal2() {
    const [state , setState] = React.useState()
    const [showModal , setShowModal] = React.useState(false)
    function login(){
        setShowModal(true)
        alert('Logado')
    }
    function sair(){
        setShowModal(false)
    }

 return (
   <View>
       <Button title='Entrar' onPress={login} >
        </Button>
       <Modal animationType='slide' visible={showModal} >
           <View style={{backgroundColor: '#292929' , flex:1}}> 
               <Text style={{color:'#6264' , fontSize:20}}>Seja Bem vindo</Text>
       <Button title='Sair' onPress={sair} >
        </Button>
           </View>
       </Modal>
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})