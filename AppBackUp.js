/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
//let image = require('./src/assets/download.jpeg');
//import image from './src/assets/ima';
import { connect } from 'react-redux';
import Modal from './src/components/modal/modal';
import ModalSelected from './src/components/modal/modal';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/Store/Actions';

class App extends Component {
  state = {
    inputValue: '',
  }

  textChangeHandler = (e) => {
      this.setState({
        inputValue: e
      })
  }

  modalClose = () => {
    this.props.onDeselectPlace();
  }

  itemDeleteHandler = (index) => {
    this.props.onDeletePlace(index);
  }      
  
  itemSelected = (k) => {
    this.props.onSelectPlace(k);
  }

  handleButtonPress = () => {
    if (this.state.inputValue.trim() === '') {
      return;
    }
    this.setState({inputValue: ''})
    this.props.onAddPlace(this.state.inputValue);
  }

  componentWillReceiveProps() {
    //console.log(this.props);
  }

  render() {
    return(
      <View 
        style={styles.outerView}
      >
        <ModalSelected 
          placeSelected={this.props.selectedPlace}
          itemDeleteHandler={this.itemDeleteHandler}
          modalClose={this.modalClose}
        />
        <View>
          <PlaceInput 
            handleButtonPress={this.handleButtonPress}  
            textChangeHandler={this.textChangeHandler} 
            inputValue={this.state.inputValue} 
          /> 
        </View>
        <PlaceList 
          listItems={this.props.places} 
          itemSelected={this.itemSelected} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    margin: 4,
    justifyContent: 'flex-start',
  }  
});

const mapStateToProps = state => {
  return {
    places: state.places.listItems,
    selectedPlace: state.places.selectedPlace
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: (key) => dispatch(deletePlace(key)),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);