import React from 'react'
import { View, Text } from 'react-native';

function PlaceDetailScreen() {
    return (
        <View>
            <Text>PlaceDetailScreen</Text>
        </View>
    )
}

PlaceDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    };
};

export default PlaceDetailScreen
