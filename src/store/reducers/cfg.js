const simpleReducer = (state = {} , action) =>{
  switch(action.type){
    case 'teste1':
        return {...state }
    case 'teste2':
        return {...state }
    }
  return state
}

export default simpleReducer