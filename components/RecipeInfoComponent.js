import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderRecipe({ recipe }) {
    if (recipe) {
        return (
            <Card
                featuredTitle={recipe.name}
                image={require('./images/tacos.jpg')}
            >
                <Text style={{ margin: 10 }}>
                    {recipe.ingredients}
                </Text>
                <Text style={{ margin: 10 }}>
                    {recipe.directions}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function RecipeInfo(props) {
    return <RenderRecipe recipe={props.recipe} />;
}

export default RecipeInfo;