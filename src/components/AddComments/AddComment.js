import React from 'react';

import { Alert, TextInput, View , TouchableWithoutFeedback } from 'react-native';
import { Caption, Container } from './styles';


export default () => {
  const [comment, setComment] = React.useState('')
  const [editMode, setEditMode] = React.useState(false)
  
  const handleAddComment = () => {
    Alert.alert('adicionado', comment)
  }
  const commentArea = () => {
    return(
    <Container>
      <TextInput
        placeholder='Comente...'
        autoFocus={true}
        value={comment}
        onChangeText={c => setComment(c)}
        onSubmitEditing={handleAddComment}
        style={{width:'90%'}}
      />
      <TouchableWithoutFeedback onPress={() => setEditMode(false)}>
        <Caption>X</Caption>

      </TouchableWithoutFeedback>
    </Container >
  )}
  
  const addComment = () => {
    return(
      <TouchableWithoutFeedback onPress={() => setEditMode(true)}>
        <Container>
        <Caption>
          Adicione um comentário...
        </Caption>
      </Container>
    </TouchableWithoutFeedback>
  )}
  
  return (
    <View style={{flex:1}}>
      {editMode ? commentArea() : addComment()}
    </View>
  )
}