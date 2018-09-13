import { combineReducers, createStore } from 'redux';
import placeReducer from './Reducers/places';

const rootReducer = combineReducers({
    places: placeReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;