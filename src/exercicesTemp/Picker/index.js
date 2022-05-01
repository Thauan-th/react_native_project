import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
export default function PickerComponente() {
    const [selectedValue, setSelectedValue] = React.useState('');
    const sabores = [
        {
            'id': 1,
            'nome': 'Chocolate',
            'preco': 'R$ 35,00',
        },
        {
            'id': 2,
            'nome': 'Morango',
            'preco': 'R$ 52,00'
        },
        {
            'id': 3,
            'nome': 'Baunilha',
            'preco': 'R$ 25,00'
        }
    ]
    return (
        <View >
            <Picker style={styles.picker}
                selectedValue={selectedValue}

                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {sabores.map((sabor, idx) => {
                    return (
                        <Picker.Item key={idx} label={sabor.nome} value={sabor} />
                    )
                })}

            </Picker>
            <Text style={styles.pickerItem}>Voce escolheu : {selectedValue.nome}</Text>
            <Text style={styles.pickerItem}>Valor: {selectedValue.preco}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    picker: {
        paddingTop: 130,
        paddingLeft: 50,
    },
    pickerItem: {
        paddingLeft: 100,
    }
}
);