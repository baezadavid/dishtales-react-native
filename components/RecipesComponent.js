import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Recipes(props) {

    const renderRecipeItem = ({ item }) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.directions}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{ source: require('./images/crepes.jpg') }}
            />
        );
    };

    return (
        <FlatList
            data={props.recipes}
            renderItem={renderRecipeItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Recipes;