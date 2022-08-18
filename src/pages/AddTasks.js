import React from "react";
import {Modal,View,StyleSheet,TouchableWithoutFeedback,Text,TextInput,TouchableOpacity} from 'react-native'


export default ({onCancel,isVisible, onSave})=>{
  const [desc,setDesc] = React.useState('')
  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={onCancel} animationType='slide' >
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.background}>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.header}>Nova Tarefa</Text>
        <TextInput style={styles.input}
          placeholder="Informe a descricao..."
          value={desc}
          onChangeText={t=>setDesc(t)}
        />
        <View style={styles.buttons}> 
          <TouchableOpacity onPress={onCancel} >
            <Text style={styles.button} >   Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity  >
            <Text style={styles.button} onPress={()=>onSave({
              id:Math.random(),
              desc,
              estimateAt: new Date().toString()
            })}   >Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.background}>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.7)'
  },
  container:{

    backgroundColor:'#FFF'
  },
  header:{
    backgroundColor: '#B13B44',
    color:'#fff',
    padding:15,
    textAlign:'center',
    fontSize:15
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'flex-end',
    
  },
  input:{
    width:'90%',
    marginTop:10,
    height:40,
    marginLeft:10,
    backgroundColor:'#FFF',
    borderWidth:1,
    borderColor:"#aaa",
    borderRadius:6
  },
  button:{
    margin:20,
    marginRight:30,
    color:'#B13B44'
  }
})