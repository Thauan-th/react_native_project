import { css } from "styled-components";
import styled from "styled-components/native";


const applyStyleProp = css`
  ${({ style }) => ({ ...style })};
`

export const Container = styled.View`
  ${applyStyleProp};
  padding: 10px;
  border-bottom-width:1px;
  border-color: '#BBB';
  /* flex-direction: 'row'; */
  /* justify-content: 'space-between'; */
`

export const Row = styled.View`
  ${applyStyleProp};
  flex-direction: row;
  align-items: center;
`

export const ImageContainer = styled.Image(()=>({
  height: '30px',
  width: '30px',
  resizeMode:'contain'
}))

export const Title = styled.Text`
  color:#000;
  height:30px;
  font-size:20px;
`
