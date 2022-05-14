import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FlatListComponente from './exercicesTemp/FlatListComponente'
import PickerComponente from './exercicesTemp/Picker';
import Insta from './exercicesTemp/insta';
import SliderComponente from './exercicesTemp/Slider';
import Modal  from './exercicesTemp/Modal';
import HTTPSS from './exercicesTemp/Http';
import Animado from './exercicesTemp/Animacao';
import AsyncStorage from './exercicesTemp/AsyncStorage';
import Cep from './exercicesTemp/Cep';
export default function Exercicios() {

    return (
        <View >
            {/* <FlatListComponente /> */}
            {/* <PickerComponente /> */}
            {/* <SliderComponente /> */}
            {/* <Insta></Insta> */}
            {/* <AsyncStorage/> */}
            {/* <Modal /> */}
            {/* <HTTPSS /> */}
            {/* <Animado /> */}
            <Cep/>
        </View>
    );
}