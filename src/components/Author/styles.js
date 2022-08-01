import { Gravatar } from "react-native-gravatar";
import styled from "styled-components/native";

export const Container = styled.View(()=>({
  flexDirection: 'row',
  alignItems: 'center'
}))

export const Avatar = styled(Gravatar)(()=>({
  width:30,
  height:30,
  borderRadius: 15,
  marginHorizontal: 10
}))

export const NickName =  styled.Text(()=>({
  color: '#444',
  marginVertical: 10,
  fontSize: 15,
  fontWeight: 'bold'
}))