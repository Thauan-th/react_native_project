import styled,{css} from 'styled-components/native'

import p from '../params'

export const Field = styled.View`
  height: ${p.blockSize} ;
  width: ${p.blockSize} ;
  border-width: ${p.borderSize} ;
  ${({regular})=>regular && css`
    background-color:#999;
    border-left-color:#CCC;
    border-top-color:#CCC;
    border-right-color:#333;
    border-bottom-color:#333;
  `}
`