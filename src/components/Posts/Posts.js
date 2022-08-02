import React from 'react';

import { Container, Image } from './styles';
import { Dimensions } from 'react-native';

import Author from '../Author';
import Comments from '../Comments';
import AddComment from '../AddComments/AddComment';

export default ({ image , email , nickname,comments}) =>{
  const DeviceWidth = Dimensions.get('window').width
  return (
    <Container>
      <Image source={image} DeviceWidth={DeviceWidth} />
      <Author email={email} nickname={nickname} />
      <Comments comments={comments} />
      <AddComment />
    </Container>
  );
}