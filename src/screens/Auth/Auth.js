import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import startMainTab from '../MainTabs/startMainTab';
import DefaultInput from '../../components/UI/DefaultInput/DefaulInput';
import HeadingOne from '../../components/UI/HeadingOne/HeadingOne';
import FontWrapper from '../../components/UI/TextWrapper/FontWrapper';
import BackImage from '../../assets/bb.jpg';
import CustomButton from '../../components/UI/Button/CustomButton';
import  validate  from '../../Utility/validation';
//var {height, width} = Dimensions.get('screen');
import { tryAuth } from '../../Store/Actions/index';
import { connect } from 'react-redux';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authState: 'login',
            height: Dimensions.get('screen').height,
            width: Dimensions.get('screen').width,
            controls: {
                email: {
                    value: '',
                    valid: false,
                    validationRules: {
                        isMail: true
                    },
                    touched: false
                },
                password: {
                    value: '',
                    valid: false,
                    validationRules: {
                        minLength: 6
                    },
                    touched: false
                },
                confirmPassword: {
                    value: '',
                    valid: false,
                    validationRules: {
                        equalTo: 'password'
                    },
                    touched: false
                },
            }
        }
    }

    handleLogin = () => {
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        }
        this.props.onLogin(authData);
        startMainTab();
    }

    componentDidMount() {
        Dimensions.addEventListener('change', (res) => {
            this.setState({
                height: res.window.height,
                width: res.window.width
            });
        });
    }

    updateInputState = (key, val) => {
        let connectedValue = {};
        let checkCondition = this.state.controls[key].validationRules.equalTo;
        if (checkCondition) {
            const equalControl = checkCondition;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            }
        }

        this.setState( prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: val,
                        valid: validate(val, prevState.controls[key].validationRules, connectedValue)
                    }
                }
            }
        })
    }

    changeLogInHandler = () => {
        this.setState( prevState => {
            return { authState: prevState.authState == 'login' ? 'signup' : 'login' }
        });
    }

    render() {
        let {height, width} = this.state;
        let login = (this.state.authState == 'signup');
       
        let authLogin = (
            <DefaultInput 
                placeholder={'Confirm Password'} 
                style={styles.input}
                value={this.state.controls.confirmPassword.value}
                onChangeText = {(val) => this.updateInputState('confirmPassword', val)}
                valid={this.state.controls.confirmPassword.valid} 
                secureTextEntry
            />
        );

        return (
            <ImageBackground 
                source={BackImage}
                style={styles.backImage}
            >
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={'padding'}
                enabled
            >
                {
                    height>width
                    ?
                    <FontWrapper>
                        <HeadingOne style={styles.headingStyle}>{login ? 'Sign up' : 'Log In'}</HeadingOne>
                    </FontWrapper>
                    :
                    null
                }
                <CustomButton
                    onPress={this.changeLogInHandler} 
                    style={styles.loginButton}
                >
                    Switch to {!login ? 'Sign up' : 'Log In'}
                </CustomButton>
                <View style={styles.inputContainer}>
                    <DefaultInput 
                        placeholder={'Your E-mail Address'} 
                        style={styles.input}
                        value={this.state.controls.email.value}
                        onChangeText = {(val) => this.updateInputState('email', val)}
                        valid={this.state.controls.email.valid}
                        autoCapitalize={'none'} 
                        autoCorrect={false}
                        keyboardType={'email-address'}

                    />
                    {
                        height>width
                        ?
                        <View>
                            <DefaultInput 
                                placeholder={'Password'} 
                                style={styles.input}
                                value={this.state.controls.password.value}
                                onChangeText = {(val) => this.updateInputState('password', val)}
                                valid={this.state.controls.password.valid} 
                                secureTextEntry={true}
                            />
                            {login ? authLogin : null }
                        </View>
                        :
                        <View style={styles.landScapeInput}>
                             <DefaultInput 
                                placeholder={'Password'} 
                                style={[styles.input,{width: (height>width) ? '100%': login ? '49%' : '100%'}]}
                                value={this.state.controls.password.value}
                                onChangeText = {(val) => this.updateInputState('password', val)}
                                secureTextEntry={true}
                            />
                            {
                                login
                                ?
                                <DefaultInput 
                                    placeholder={'Confirm Password'} 
                                    style={[styles.input,{width: (height>width) ? '100%': '49%' }]}
                                    value={this.state.controls.confirmPassword.value}
                                    onChangeText = {(val) => this.updateInputState('confirmPassword', val)}
                                    secureTextEntry={true}
                                />
                                :
                                null
                            }
                        </View>
                    }
                    
                </View>
                <CustomButton 
                    style={styles.loginButton}
                    onPress={this.handleLogin}
                    disabledButton = {                       
                        login
                        ?
                        !this.state.controls.email.valid ||
                        !this.state.controls.password.valid ||
                        !this.state.controls.confirmPassword.valid
                        :
                        !this.state.controls.email.valid ||
                        !this.state.controls.password.valid   
                    }
                >
                    {login ? 'Sign up' : 'Log In'}
                </CustomButton>
            </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        borderColor: '#bbb',
        backgroundColor: '#eee',
    },
    headingStyle: {
        color: 'red'
    },
    backImage: {
        flex: 1
    },
    loginButton: {
        backgroundColor: '#efe',  
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,      
    },
    landScapeInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    }
    
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (authData) => dispatch(tryAuth(authData))
    };
}

export default connect(null, mapDispatchToProps)(Auth);





// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import MapView from 'react-native-maps';

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: null,
//       longitude: null,
//       error: null,
//     };
//     alert('loaded');
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         console.log(position);
//         const { accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed } = position.coords;
//         this.setState({
//           accuracy,
//           altitude,
//           altitudeAccuracy,
//           heading,
//           latitude,
//           longitude,
//           speed,
//           error: null,
//         });
//       },
//       (error) => this.setState({ error: error.message }),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//     );
//   }

//   render() {
//     const { region } = this.props;
//     const { latitude, longitude } = this.state;
//     console.log('region', region);
//     return (
//       <View style ={styles.container}>
//         <MapView
//           style={styles.map}
//           region={{
//             latitude: latitude || 37.78825,
//             longitude: longitude || -122.4324,
//             latitudeDelta: 0.015,
//             longitudeDelta: 0.0121,
//           }}
//         >
//         </MapView>
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     flex: 1,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });