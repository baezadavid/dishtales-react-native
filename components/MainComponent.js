import React, { Component } from 'react';
import Recipes from './RecipesComponent';
//import { RECIPES } from '../shared/recipes';
import RecipeInfo from './RecipeInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const RecipesNavigator = createStackNavigator(
  {
    Recipes: { screen: Recipes },
    RecipeInfo: { screen: RecipeInfo },
  },
  {
    initialRouteName: "Recipes",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f58742",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
          color: "#fff"
      }
    }
  }
);

const AppNavigator = createAppContainer(RecipesNavigator);


class Main extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            recipes: RECIPES,
            selectedRecipe: null
        };
    }*/

    //onRecipeSelect(recipeId) {
        //this.setState({selectedRecipe: recipeId})
   // }

    render() {
        return ( 
        <View
            style={{
                flex: 1,
                paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
            }}
        >

            <AppNavigator />
           {/* <Recipes 
                recipes={this.state.recipes} 
                onPress={recipeId => this.onRecipeSelect(recipeId)}
            />
            <RecipeInfo
                recipe={this.state.recipes.filter(recipe => recipe.id === this.state.selectedRecipe)[0]}
           />*/}
        </View>
        )
    }
}

export default Main;