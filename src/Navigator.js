import React from 'react'

import Auth from './pages/Auth'
import TaskList from './pages/TaskList'

import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator()

export default  ()=>{
  return(
    <AuthStack.Navigator >
      <AuthStack.Screen name='Login' component={Auth} options={{headerShown:false}} /> 
       <AuthStack.Screen 
        name="Tasks" 
        component={TaskList}
        options={{headerShown:false}} />
        
    </AuthStack.Navigator>
  )
}