import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

const FontWrapper = (props) => {
    return(
        <Text style={Styles.fontStyle}>
            {props.children}
        </Text>
    );
}

const Styles = StyleSheet.create({
    fontStyle: {
        fontFamily: 'Arial',
    }
});

export default FontWrapper;