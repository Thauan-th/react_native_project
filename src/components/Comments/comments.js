import { Container,CommentContainer,Nick,Comment } from './styles'
import React from 'react'

export default ({comments}) => {

  function renderComments(){
    return  comments.map((item, index) => (
        <CommentContainer key={index}>
          <Nick>{item.nickname}:</Nick>
          <Comment > {item.comment}</Comment>
        </CommentContainer>
      )
    )
  }

  return (
    <Container>
      {(comments.length > 0 && Array.isArray(comments)) && renderComments()}
    </Container>
  )
} 

