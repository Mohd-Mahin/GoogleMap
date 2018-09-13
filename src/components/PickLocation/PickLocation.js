import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

class PickLocation extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.placeHolder}>
                    <Text>Map</Text>
                </View>
                <View style={styles.button}>
                    <Button title="Locate Me" onPress={()=> alert('Pick Location !! ')}/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%'
    },
    placeHolder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        height: 150,
        width: '80%'
    },
    button: {
        margin: 5
    }
});

export default PickLocation;