import React from "react";
import {ImageBackground , StyleSheet , Text , TextInput , TouchableOpacity , Alert , View} from 'react-native'
import bgImage from '../../assets/imgs/login.jpg'
import { AuthContext } from "../store";

export default () => {
  const {signIn , signUp} =  React.useContext(AuthContext)
  
  const [inputs,setInputs] = React.useState({
    name:"",
    email: "",
    password:'',
    confirmPassword:''
  })
  const [stageNew,setStageNew] = React.useState(false)

  const signInOrSignUp = () => {
    if(stageNew){
      signIn(inputs)
      return 0
    }
    signUp(inputs)
    return 0
  }


  return (
    <ImageBackground source={bgImage} style={styles.background}> 
      <Text style={styles.title}>
        {
          stageNew ? 'Cadastrar' : 'Entrar'
        }
      </Text>
      {
        !inputs.stageNew && (
          <>
            <TextInput placeholder="Name" value={inputs.name} onChangeText={e=>setInputs({...inputs,name:e})}  style={styles.input} />
          </>
        )
      }
      <TextInput  placeholder="Email" value={inputs.email} onChangeText={e=>setInputs({...inputs,email:e})}  style={styles.input} />
      <TextInput  placeholder="Password" secureTextEntry={true}  value={inputs.password} onChangeText={e=>setInputs({...inputs,password:e})}  style={styles.input} />
      {
        stageNew && (
          <>
            <TextInput placeholder="Confirmar Senha" secureTextEntry={true}  value={inputs.confirmPassword} onChangeText={e=>setInputs({...inputs,confirmPassword:e})}  style={styles.input} />
          </>
        )
      }
      <TouchableOpacity onPress={signInOrSignUp}>
        <View>
          <Text style={styles.button}>
            {   stageNew ? 'Cadastrar':'Entrar'}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:10}} onPress={()=>{setStageNew(!stageNew)}}>
        <Text style={{color:'white'}}>
        {   stageNew ? 'Ja possui conta ?':'Ainda nao possui conta ?'}
        </Text>
      </TouchableOpacity>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  title:{
    color:'#fff',
    fontSize:70,
    alignItems:'center',
    justifyContent:'center'
  },
  background:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
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
    fontSize:20,
    marginRight:30,
    padding:10,
    color:'#fff',
    backgroundColor:'green',
    width:'80%',
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
})

