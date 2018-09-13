import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItems = (props) => {
    console.log(props.image)
    return(
        <TouchableOpacity onPress={() => props.itemSelectedHandler()}>
            <View style={styles.outerListContainer}>
                <Image 
                    source={{uri: props.placeImage.uri}}
                    style={styles.image}
                />
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    outerListContainer: {
        width: '100%',
        height: 40,
        backgroundColor: 'silver',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    image: {
        height: 30,
        width:30,
        marginLeft: 10,
        marginRight: 10,
    }
})

export default listItems;