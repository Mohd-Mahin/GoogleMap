import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../Store/Actions'

class ModalSelected extends React.Component {

    itemDeleteHandler = (key) => {
        this.props.onItemDeletedHandler(key);
        this.props.navigator.pop({
            animated: true,
            animationType: 'fade'
        })
    }
   
    render() {
        let modalContent = null;
        if (this.props.placeSelected) {
            modalContent = (
                <View
                    style={{width: '100%'}}
                >
                    <Image 
                        style={styles.imageStyle}
                        source={this.props.placeSelected.image} 
                        resizeMode={'cover'}
                    />
                    <Text
                        style={styles.textStyle}
                    >
                        {this.props.placeSelected.value}
                    </Text> 
                </View>
            );
        }
        return (
            
                <View 
                    style={styles.modalInnerContainer}
                >
                    {modalContent}
                    <View>
                        <TouchableOpacity 
                            onPress={()=> this.itemDeleteHandler(this.props.placeSelected.key)}
                        >
                            <Icon 
                                size={30}
                                name={Platform.OS === "android" ? 'md-trash':'ios-trash'}
                                color={'red'}
                                style={{ textAlign:'center' }}
                            />
                        </TouchableOpacity>
                     
                    </View>
                </View>
          
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    modalInnerContainer: {
        margin: 20
    },
    imageStyle: {
        marginTop: 10,
        width: '100%', 
        height: 300
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 33,
        fontWeight: 'bold',
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onItemDeletedHandler: (key) => dispatch(deletePlace(key))
    }
}


export default connect(null, mapDispatchToProps)(ModalSelected);