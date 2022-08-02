import styled from 'styled-components/native'

export const Container = styled.View(()=>({
  flex:1,
  margin: 10
}))

export const CommentContainer = styled.View(()=>({
  flexDirection: 'row',
  marginTop: 5
}))

export const Comment = styled.Text(()=>({
  color: '#555'
}))
export const Nick = styled.Text(()=>({
  marginLeft: 5,
  fontWeight: 'bold',
  color: '#444'
}))
