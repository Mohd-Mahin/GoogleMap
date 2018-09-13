import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import { addPlace } from '../../Store/Actions/index';
import HeadingOne from '../../components/UI/HeadingOne/HeadingOne';
import FontWrapper from '../../components/UI/TextWrapper/FontWrapper';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            image: null
        }
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type == "NavBarButtonPress") {
            if (event.id == "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }

    handleTextChange = (val) => {
        if (!val) return;
        this.setState({textValue: val});
    }

    placeAddHandler = () => {
        this.props.onAddPlace(this.state.textValue, this.state.image);
    }

    handleImagePicker = (image) => {
        if (!image) return;
        this.setState({ image });
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={{margin: 6}}>
                        <FontWrapper>
                            <HeadingOne>Share A Place with Us.</HeadingOne>
                        </FontWrapper>
                    </View>
                    <PickImage imageHandler={this.handleImagePicker}/>
                    <PickLocation />
                    <PlaceInput   
                        textValue={this.state.textValue}
                        textChangeHandler={this.handleTextChange}
                    />
                    <View style={styles.button}>
                        <Button title={'Share the Place'} onPress={this.placeAddHandler}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
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
    },
    imagePreview: {
        width: '100%',
        height: '100%'
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlace: (placeName, imageUri) => dispatch(addPlace(placeName, imageUri))
    }
}

export default connect(null, mapDispatchToProps)(SharePlace);