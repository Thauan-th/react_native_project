import React from 'react'

import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const AuthContext = React.createContext({})

export default ({children})=>{
  const url = 'http://localhost:3000'
  const api_client = axios.create({
    baseURL: url,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': '*/*'
    }
  })
  const [user,setUser] = React.useState(null)

  const Navigate = useNavigation()

  
  async function signUp({email,password,name}){
    const {data} = await api_client.post('/signup',{email,password,name})
        .catch(err=>console.error('Login errado'))
    if(data.message){
      Navigate.navigate('Tasks')
    }
    
  }
  async function signIn({email,password}){
   const {data} = await api_client.post('/signin',{email,password})
        .catch(err=>console.error('Login errado'))
    if(data.token){
      AsyncStorage.setItem('token',data.token)
      Navigate.navigate('Tasks')
    }
  }
 
  function redirect(route){
    Navigate.navigate(route)
  }

  const context = {
    signUp,
    signIn,
    redirect,
  }
  return (
  <AuthContext.Provider value={context}>
    {children}
  </AuthContext.Provider>
  )
}