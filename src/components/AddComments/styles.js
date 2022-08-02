import styled from 'styled-components/native'

export const Container = styled.View(()=>({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  margin: 10
}))

export const Caption = styled.Text`
  margin-left:10px;
  font-size:12px;
  color:#CCC;
`