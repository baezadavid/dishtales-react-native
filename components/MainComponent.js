import React, { Component } from 'react';
import Recipes from './RecipesComponent';
import { RECIPES } from '../shared/recipes';
import RecipeInfo from './RecipeInfoComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: RECIPES
        };
    }

    render() {
        return <Recipes recipes={this.state.recipes} />;
    }
}

export default Main;