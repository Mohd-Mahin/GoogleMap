import React, {Component} from 'react';
import {
    TouchableOpacity,
    View,
    TextInput,
    StyleSheet,
    Text
} from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaulInput';

const PlaceInput = (props) => {
    return (
        <DefaultInput 
            placeholder={'Place Name'}
            value={props.textValue}
            onChangeText={props.textChangeHandler}
        />
    );
} 

export default PlaceInput;

