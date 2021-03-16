import React, { Component } from 'react';
import Recipes from './RecipesComponent';
import { RECIPES } from '../shared/recipes';
import RecipeInfo from './RecipeInfoComponent';
import { View } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: RECIPES,
            selectedRecipe: null
        };
    }

    onRecipeSelect(recipeId) {
        this.setState({selectedRecipe: recipeId})
    }

    render() {
        return ( 
        <View>
            <Recipes 
                recipes={this.state.recipes} 
                onPress={recipeId => this.onRecipeSelect(recipeId)}
            />
            <RecipeInfo
                recipe={this.state.recipes.filter(recipe => recipe.id === this.state.selectedRecipe)[0]}
            />
        </View>
        )
    }
}

export default Main;