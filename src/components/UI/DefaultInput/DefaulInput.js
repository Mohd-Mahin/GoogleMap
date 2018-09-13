import React from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

const defaultInput = (props) => {
    return (
        <TextInput  
            underlineColorAndroid="transparent"
            {...props}
            style={[styles.inputStyle, props.style, props.valid ? styles.validStyle : null ]} 
        />
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        width: '100%',
        padding: 8,
        margin: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#eee',
    },
    validStyle: {
        backgroundColor: '#9dc183',
        borderColor: 'green'
    }
});

export default defaultInput;