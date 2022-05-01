import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

export default function FlatListComponente() {
    const feed = [
        {
            id: 1,
            title: 'Title 1',
            description: 'Description 1',
            image: 'https://picsum.photos/200/300?random=1'
        },
        {
            id: 2,
            title: 'Title 2',
            description: 'Description 2',
            image: 'https://picsum.photos/200/300?random=2'
        },
        {
            id: 3,
            title: 'Title 3',
            description: 'Description 3',
            image: 'https://picsum.photos/200/300?random=3'
        },
        {
            id: 4,
            title: 'Title 4',
            description: 'Description 4',
            image: 'https://picsum.photos/200/300?random=4'
        }
    ]
    const [data, setData] = React.useState(feed)

    return (
        <View style={styles.teste}>
            <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => {

                return (
                    <View >
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.image}</Text>
                    </View>
                )
            }} />

        </View>
    )
}
const styles = StyleSheet.create({

    teste: {
        paddingLeft: 50,
        paddingTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

});