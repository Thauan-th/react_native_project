const initialState = {
  email:'',
  password:''
}
const simpleReducer = (state = initialState , action) =>{
  switch(action.type){
    case 'emailChange':
        return {...state ,email:  action.payload.email }
    case 'passwordChange':
        return {...state , password: action.payload.password}
    }
  return state
}

export default simpleReducer