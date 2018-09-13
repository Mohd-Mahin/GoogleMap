import React , {Component} from 'react';
import {
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';
//import backgroundImage from '../../assets/image.png';
import ImagePicker from 'react-native-image-picker';

class PickImage extends Component {
    state = {
        image: {}
    }

    imagePickHandler = () => {
       ImagePicker.showImagePicker({ title: 'Select the image'}, response => {
            if (response.didCancel) {
                console.log('Did Catch');
            } else if (response.error) {
                console.log('Error');       
            } else {
                this.setState({ image: { uri: response.uri }});
                this.props.imageHandler(response.uri)
            }
       })
    }

    render() {
        return(
            <View style={{width: '100%', alignItems:'center'}}>
                <View style={styles.placeHolder}>
                    <Image source={this.state.image} style={styles.imagePreview}/>
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={this.imagePickHandler}/>
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