import {
    ADD_PLACE,
    DELETE_PLACE
} from './actionTypes';

const addPlace = (placeName, imageUri) => {
    return {
        type: ADD_PLACE,
        placeName: placeName,
        imageUri
    }
};

const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        key
    }
};


export { addPlace, deletePlace };