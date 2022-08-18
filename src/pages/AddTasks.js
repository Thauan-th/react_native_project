import React from "react";
import {Modal,View,StyleSheet,TouchableWithoutFeedback} from 'react-native'

export default ({onCancel,isVisible})=>{
  return (
    <Modal transparent={true} visible={isVisible}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.background}>

        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:rgba(0,0,0,0.7)
  }
})