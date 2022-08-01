import React from 'react';
import {Container,Avatar,NickName } from './styles'

export default function Author({email,nickname}) {
 return (
   <Container>
    <Avatar options={{email,secure:true}}/>
    <NickName>{nickname}</NickName>
   </Container>
  );
}