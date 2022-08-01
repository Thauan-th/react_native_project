import React from 'react';
import { Container,Image } from './styles';
import { Dimensions } from 'react-native';

import Author from '../Author';

export default function Posts({image}) {
 const DeviceWidth = Dimensions.get('window').width 
 return (
  <Container>
    <Image source={image} DeviceWidth={DeviceWidth} />
    <Author email='thauan@gmail.com' nickname='TH'/>
  </Container>
  );
}