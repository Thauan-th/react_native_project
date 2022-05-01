import { View, Text, Switch } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
export default function SliderComponente() {
    const [value, setValue] = React.useState(0)
    const [toggle, setToggle] = React.useState(false)
    return (
        <View>
            <Slider
                minimumValue={0}
                maximumValue={100}
                onValueChange={v => setValue(v)}
                minimumTrackTintColor="#FF0000"
                maximumTrackTintColor="#0000FF"
                thumbTintColor="#FFFF00"
            >

            </Slider>
            <Text style={{ alignContent: 'center' }}>{value.toFixed(0)}</Text>
            <Switch
                value={toggle}
                onValueChange={v => setToggle(v)}
            />
            <Text>{String(toggle)}</Text>
        </View>
    )
}