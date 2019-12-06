import React, { Component } from "react";
import RecipeDetails from "./RecipeDetails.js";
import RecipeActions from "../data/RecipeActions";

export default class RecipeList extends Component {
  handleSelectRecipe = ( recipe) => {
    RecipeActions.selectRecipe(recipe);
  };
  render() {
    const recipeList = (
      <ul className="bulletlessList">
        {this.props.myRecipeState.recipes.map(recipe => (
          <li
            key={recipe.id}
            onClick={event => this.handleSelectRecipe( recipe)}
          >
            {recipe.name}
          </li>
        ))}
      </ul>
    );
    const recipeDetails = this.props.myRecipeState.selectedRecipe ? (
      <RecipeDetails recipe={this.props.myRecipeState.selectedRecipe} />
    ) : (
      <h3>Please choose one of our delicious recipes</h3>
    );

    return (
      <div className="container">
        <div className="text-center">
          <h1>PCS Recipes</h1>
          <hr />
          {recipeList}
          <hr />
          {recipeDetails}
        </div>
      </div>
    );
  }
}

