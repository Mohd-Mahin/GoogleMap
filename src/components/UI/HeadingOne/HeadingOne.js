import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

const HeadingOne = (props) => {
    return (
        <Text
            style={[styles.textStyle ,props.style]}
        >
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 28,
        fontWeight: 'bold',
    }
});

export default HeadingOne;