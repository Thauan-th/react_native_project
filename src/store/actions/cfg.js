import {actions} from '../constants'
export const simpleAction = (param) =>{
  return{
    type: actions.CHANGE_NAME,
    payload:{
      param
    }
  }
}