import React from 'react'
import { Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PlaceItem from '../components/PlaceItem';

function PlacesListScreen(props) {
    const places = useSelector(state => state.places.places);
    const dispatch = useDispatch();

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <PlaceItem
                    image={itemData.item.imageUri}
                    title={itemData.item.title}
                    address={null}
                    onSelect={() => {
                        props.navigation.navigate('PlaceDetail', {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id
                        });
                    }}
                />
                // <Text>{itemData.item.title}</Text>
            )}
        />
    )
}

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All places',
        headerRight: <Text onPress={() => navData.navigation.navigate('NewPlace')}>Add new place</Text>
    }
}

export default PlacesListScreen
