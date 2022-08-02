import React from 'react';

import { Container, Image } from './styles';
import { Dimensions } from 'react-native';

import Author from '../Author';
import Comments from '../Comments';

export default function Posts({ image }) {
  const DeviceWidth = Dimensions.get('window').width
  const fake_comments = [
    {
      nickname: "Teste",
      comment: "Cool"
    },
    {
      nickname: "Teste2",
      comment: "Cool1"
    },
    {
      nickname: "Teste3",
      comment: "Cool2"
    }
  ]
  return (
    <Container>
      <Image source={image} DeviceWidth={DeviceWidth} />
      <Author email='thauan@gmail.com' nickname='TH' />
      <Comments comments={fake_comments} />
    </Container>
  );
}