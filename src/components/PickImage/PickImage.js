import React , {Component} from 'react';
import {
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';
import backgroundImage from '../../assets/image.png';


class PickImage extends Component {
    render() {
        return(
            <View style={{width: '100%', alignItems:'center'}}>
                <View style={styles.placeHolder}>
                    <Image source={backgroundImage} style={styles.imagePreview}/>
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={()=> alert("Pressed")}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    placeHolder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        height: 150,
        width: '80%'
    },
    button: {
        margin: 5
    },
    imagePreview: {
        width: '100%',
        height: '100%'
    }
});

export default PickImage;