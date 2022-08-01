import React from 'react';
import { View } from 'react-native';

import Header from './components/Header';
import Posts from './components/Posts';

export default function src() {
 return (
   <View style={{flex:1}}>
    <Header/>
    <Posts image={require('../assets/fence.jpg')}/>
   </View>
  );
}