import { createAppContainer, createStackNavigator } from 'react-navigation';
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';

const mainNavigator = createStackNavigator(
    {
        PlacesList: PlacesListScreen,
        PlaceDetail: PlaceDetailScreen,
        NewPlace: NewPlaceScreen,
        Map: MapScreen
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#bfbfbf'
            }
        }
    }
);

export default createAppContainer(mainNavigator);