import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
`

export const Image =  styled.Image(({DeviceWidth})=>({
  width: DeviceWidth,
  height: DeviceWidth * 3/4,
  resizeMode: 'contain'
}))