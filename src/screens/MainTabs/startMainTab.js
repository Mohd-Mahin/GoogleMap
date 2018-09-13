import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Platform
} from 'react-native';

export default async () => {
    const a =  {
        leftButtons: [
            {
                icon: await Icon.getImageSource(Platform.OS === "android" ? "md-menu":'ios-menu', 30),
                title: "Menu",
                id: "sideDrawerToggle"
            }
        ]
    }
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: 'Find Place',
                title: 'Find Place',
                screen: 'Google_Map.FindPlaceScreen',
                icon: await Icon.getImageSource(Platform.OS === "android" ? 'md-map':'ios-map', 30),
                navigatorButtons: a,
                navigatorStyle: {
                    navBarButtonColor: 'green'
                }
            },
            {
                label: 'Share Place',
                title: 'Share Place',
                screen: 'Google_Map.SharePlaceScreen',
                icon: await Icon.getImageSource(Platform.OS === "android" ? 'md-share':'ios-share', 30),
                navigatorButtons: a,
                navigatorStyle: {
                    navBarButtonColor: 'green'
                }
            }
        ],
        tabsStyle: {
            tabBarSelectedButtonColor: 'green'
        },
        appStyle: {
            tabBarSelectedButtonColor: 'green'
        },
        drawer: {
            left: {
                screen: 'Google_Map.SideDrawer'
            }
        }
    });
} ;