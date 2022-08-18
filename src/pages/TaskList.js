import React from "react";

import TodayImage from '../../assets/imgs/today.jpg'

import { View , ImageBackground , StyleSheet , Text , FlatList , TouchableOpacity, Platform} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task'
import AddTasks from "./AddTasks";

export default ()=>{
  const initial = [
      {
      id:Math.random(),
      desc:'Comprar livro',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Comprar alguma coisa',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Comprar clean code',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Codar',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Comprar livro',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Comprar alguma coisa',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Comprar clean code',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Codar',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Comprar livro',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Comprar alguma coisa',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Comprar clean code',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Codar',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Comprar livro',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Comprar alguma coisa',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Comprar clean code',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },
      {
      id:Math.random(),
      desc:'Codar',
      estimateAt: new Date().toString(),
      doneAt: new Date().toString()
    },   
  ]
  const [allTasks,setAllTasks] = React.useState(initial)
  const [showDoneTask,SetShowDoneTasks] =  React.useState(false)
  const [tasksModal,setTasksModal] =  React.useState(false)

  const today = moment().locale('pt-br').format("ddd,D [de] MMMM")

  const toggleFilter = ()=>{
    
    SetShowDoneTasks(!showDoneTask)
  }

  const toggleTask = taskId=>{
    const tasks = [...allTasks]
    tasks.forEach(task =>{
      if(task.id==taskId){
        task.doneAt =  task.doneAt ?  null : new Date().toString()
      }
    })
    setAllTasks(tasks)
  }
  const visibleTasks = showDoneTask ? allTasks.filter(item=>!item.doneAt ) : allTasks

  const onSave = (task)=>{
    allTasks.push(task)
    setTasksModal(false)
  }

  return (
    <View  style={styles.container}>
      <AddTasks isVisible={tasksModal} onCancel={()=>setTasksModal(false)} onSave={onSave}/>
      <ImageBackground source={TodayImage} style={styles.background}>
        <View style={styles.iconBar}>
          <TouchableOpacity onPress={toggleFilter}>
            <Icon name={showDoneTask ? 'eye':'eye-slash'} size={20} color={'#fff'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.titleBar}>
          <Text style={styles.title}>Hoje</Text>
          <Text style={styles.subtitle}>{today}</Text>
        </View> 
      </ImageBackground>  
      <View style={styles.taskContainer}>
        <FlatList 
          data={visibleTasks}
          keyExtractor={item=>item.id}
          renderItem={({item})=><Task  {...item} toggleTask={toggleTask} />}
        />
      </View>

        <TouchableOpacity style={styles.addTask} onPress={()=>setTasksModal(true)}>
          <Icon 
            name='plus' 
            size={20}
            color='#fff'
            />
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  background:{
    flex:   3 ,

  },
  taskContainer:{
    flex:7,
  },
  titleBar:{
    flex:1,
    justifyContent:'flex-end'
  },
  title:{
    fontSize:30,
    color:'#fff'
  },
  subtitle:{
    // fontFamily:50,
    color:'#fff'
  },
  iconBar:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-end',
    marginTop:40,
    marginRight:20
  },
  addTask:{
    position:'absolute',
    right:30,
    bottom:30,
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'green',
    justifyContent:"center",
    alignItems:'center'

  }
})