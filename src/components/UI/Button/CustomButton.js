import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

const CustomButton = props => {
    const content = (
        <View style={[styles.container, props.style, props.disabledButton ? styles.disabledStyle : null ]}>
            <Text style={[props.disabledButton ? styles.disabledTextButton : null ]}>{props.children}</Text>
        </View>
    );
    //console.log(props.disabledButton);
    if (props.disabledButton) {
        return content;
    }

    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                onPress={props.onPress}
            >
                {content}
            </TouchableNativeFeedback>
        );
    }
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
           {content}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 4,
    },
    disabledStyle: {
        backgroundColor: '#eee',
        borderColor: '#aaa'
    },
    disabledTextButton: {
        color: '#aaa'
    }
});

export default CustomButton;