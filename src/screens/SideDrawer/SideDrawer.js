import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
    handleLogOut = () => {
  
   
    }

    render() {
        return (
            <View style={[{ width: Dimensions.get('window').width }, styles.container]}>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={this.handleLogOut}
                >
                    <Icon 
                        name={Platform.OS === "android" ? "md-log-out":"ios-log-out"}
                        size={30} 
                        color="#900" 
                    />
                    <Text style={styles.logOut}>Log Out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        flex: 1,
    },
    buttonContainer: {
        width: '50%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logOut: {
        fontSize: 19,
        color: '#900'
    }
})

export default SideDrawer;