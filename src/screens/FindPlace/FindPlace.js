import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated
} from 'react-native';

import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContent: false,
            buttonFade: new Animated.Value(1),
            listFadeIn: new Animated.Value(0)
        }
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvents)
    }

    onNavigatorEvents = event => {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }

    itemSelectedHandle(key) {
        let selectedObj = this.props.places.find(place => place.key == key);
        this.props.navigator.push({
            screen: 'Google_Map.ItemDetails',
            title: selectedObj.value,
            backButtonTitle: 'Back',
            passProps: {
                placeSelected: selectedObj
            }
        })
    }

    handleButtonPress = () => {
        Animated.timing(
            this.state.buttonFade,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
                perspective: 1000
            }
        ).start();

        setTimeout(() => {
            this.setState({ showContent: true });
        },500);

        Animated.timing(
            this.state.listFadeIn,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
                perspective: 1000
            }
        ).start();
    }


    render() {
        let buttonToShow = (
            <Animated.View
                style={{
                    opacity: this.state.buttonFade,
                    transform: [
                       {scale: this.state.buttonFade.interpolate({
                           inputRange: [0, 1],
                           outputRange: [12, 1]
                       })}
                    ]
                }}
            >
                <TouchableOpacity 
                    onPress={this.handleButtonPress}
                >
                    <View 
                        style={styles.buttonStyle}
                    >
                        <Text>
                            Show Content
                        </Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
        let placeListWrapper = <PlaceList 
            places={this.props.places}
            itemSelected={this.itemSelectedHandle.bind(this)}                    
        />;

        if (this.state.showContent) {
            return(
                <Animated.View
                    style={{
                        opacity: this.state.listFadeIn
                    }}
                >
                    {placeListWrapper}
                </Animated.View>
            );
        } else {
            return(
                <View
                    style={styles.buttonWrapper}
                >
                    {buttonToShow}
                </View>
            )
        }
     
    }
}

const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonStyle: {
        borderRadius: 5,
        margin: 20,
        alignItems: 'center', 
        padding: 15, 
        borderWidth: 1, 
        borderColor: 'black'
    }
})
const mapStateToProps = (state) => {
    return {
        places: state.places.listItems
    }
}

export default connect(mapStateToProps, null)(FindPlace);