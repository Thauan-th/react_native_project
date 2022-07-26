import React from "react";

import {Container,CoreMine,Line} from './styles'

export default ()=>{
  return(
    <Container>
      <CoreMine>
        <Line ></Line>
        <Line style={{transform:[{rotate:'45deg'}]}}></Line>
        <Line style={{transform:[{rotate:'90deg'}]}}></Line>
        <Line style={{transform:[{rotate:'135deg'}]}}></Line> 
      </CoreMine>
    </Container>
  )
}