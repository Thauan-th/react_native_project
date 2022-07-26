import styled,{css} from 'styled-components/native'

import p from '../../params'

const opened_styled = {
  backgroundColor:'#999',
  borderColor:'#777',
  alignItems:'center',
  justifyContent:'center'
}

const exploded_styled = {
  backgroundColor:'red',
  borderColor:'red',
}

const regular_style = {
  backgroundColor:'#999',
  borderLeftColor:'#CCC',
  borderTopColor:'#CCC',
  borderRightColor:'#333',
  borderBottomColor:'#333'
}

export const Lb = styled.Text(({color})=>({
  fontWeight:'bold',
  fontSize:p.fontSize, 
}))

export const Field = styled.View(({regular,opened,exploded}) =>({
  height: p.blockSize ,
  width: p.blockSize ,
  borderWidth: p.borderSize,
  ...(regular && regular_style),
  ...(opened && opened_styled),
  ...(exploded && exploded_styled)
}));