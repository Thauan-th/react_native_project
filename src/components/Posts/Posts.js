import React from 'react';
import { Container,Image } from './styles';
import { Dimensions } from 'react-native';

export default function Posts({image}) {
 const DeviceWidth = Dimensions.get('window').width 
 return (
  <Container>
    <Image source={image} DeviceWidth={DeviceWidth} />
  </Container>
  );
}