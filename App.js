

import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import { Provider } from 'react-redux';
import configureStore from './src/Store/configureStore';
import ItemDetailScreen from './src/screens/ItemDetail/ItemDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configureStore();


// Register Screen
Navigation.registerComponent(
  'Google_Map.AuthScreen', 
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'Google_Map.SharePlaceScreen',
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'Google_Map.FindPlaceScreen', 
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'Google_Map.ItemDetails',
  () => ItemDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'Google_Map.SideDrawer',
  () => SideDrawer
);



// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'Google_Map.AuthScreen',
    title: 'Log In'
  }
});



// AIzaSyBh6MNHQzSf33sirrYswmqIgARCjamW5MA