import React from 'react';

import {Container,Row,ImageContainer,Title} from './styles'
import Icon from '../../../assets/icon-insta.png'


export default function Header() {
 return (
   <Container style={{}}>
    <Row>
      <ImageContainer source={Icon} />
      <Title>Insta</Title>
    </Row>
   </Container>
  );
}