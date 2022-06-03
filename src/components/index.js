import react, { useEffect } from 'react'

//deps
import { View,Text,Button , TextInput } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'

export default ()=>{
  const state = useSelector(state=>state.firstReducer)
  const dispatch = useDispatch()


  return <View>
    <TextInput placeholder='Digite seu email' onChangeText={(e)=>{dispatch({
        type:'emailChange',
        payload:{ 
          email:e
        }
    })
  }}
    />
    <TextInput placeholder='Digite sua senha' onChangeText={(e)=>{dispatch({
      type:'passwordChange',
      payload:{ 
        password:e
      }
    })
  }}
  />
  <Text>Email : {state.email}</Text>
    <Text>Password: {state.password}</Text>
  </View>
}