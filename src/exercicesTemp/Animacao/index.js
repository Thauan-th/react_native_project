import React from 'react';
import { View , Animated , Text } from 'react-native';
import { Button } from 'react-native';


export default function Animado() {
  const [widthAnimated,setWidthAnimated]= React.useState(new Animated.Value(100))
  const [heightAnimated,setHeightAnimated]= React.useState(new Animated.Value(100))
  const [colorAnimated,setColorAnimated]= React.useState(new Animated.Value(341))
  const [expand , setExpand] = React.useState(false)


  React.useEffect(()=>{
    expandOnOff(expand)
  },[expand])

  function expandOnOff(param){
    if(param){
      Animated.timing(
        widthAnimated , {
          toValue:250,
          duration:2000
        } ).start()
      Animated.timing(heightAnimated,{
        toValue: 200,
        duration: 2000
      }
      ).start()
      Animated.timing(colorAnimated,{
        toValue:4323,
        duration: 2000
      }
      ).start()
      return
    }
    Animated.timing(
      widthAnimated , {
        toValue:100,
        duration:2000
      } ).start()
    Animated.timing(heightAnimated,{
      toValue: 100,
      duration: 2000
    }
    ).start()

  }

  return (
   <View style={{justifyContent:'center',paddingLeft:90}}> 

   <Animated.View style={{
     width:widthAnimated,
     height:heightAnimated,
     backgroundColor:`#${colorAnimated}`,
     justifyContent:'center',
     backgroundColor:'#4169E1',
   }}>
    <Button onPress={()=>setExpand(prev=>!prev)}  title='clique' style={{color:'#ffff' , fontSize:22 , textAlign:'center'}}></Button>
   </Animated.View>
   </View>
  );
}