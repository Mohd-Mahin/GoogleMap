import React from 'react';
import {FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {
    _renderItems = (info) => {
        //console.log({info})
        return (
            <ListItem 
                placeName={info.item.value}
                placeImage={info.item.image}
                itemSelectedHandler = {() => props.itemSelected(info.item.key)}
            />
        )
    }
    return (
            <FlatList
                data={props.places}
                renderItem={_renderItems} 
                keyExtractor={info => `${info.key}`}                
            />
    )
} 

export default PlaceList;