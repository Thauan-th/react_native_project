import React from 'react';
import { View, Text, StyleSheet , TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment';
import 'moment/locale/pt-br'
export default ({ desc, estimateAt, doneAt , toggleTask , id}) => {

  const doneOrNotStyle = !doneAt ? {
    textDecorationLine:'line-through'
  }:{ }

  const date = doneAt ? doneAt : estimateAt
  const formatedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>toggleTask(id)}>
        <View style={styles.checkContainer}>
          {getCheckView(doneAt)}
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Text style={[styles.desc,doneOrNotStyle]}>{desc}</Text>
        <Text style={styles.date}>{formatedDate}</Text>
      </View>
    </View>
  );
}

const getCheckView = (doneAt) => {
  return (
    <View style={!doneAt ? styles.pending : styles.done}>
      {doneAt && <Icon name='check' size={20} color={'#fff'} />}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: "#AAA",
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
  checkContainer: {
    width: '20%',
    alignItems: 'center'
  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#555"
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    color: '#222'
  },
  date:{
    color:'#555',
    fontSize:12 
  }
})