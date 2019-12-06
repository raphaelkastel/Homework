import React, { Component } from "react";
import RecipeDetails from "./RecipeDetails";

export default class App extends Component {

  state = {
    selectedRecipe: null
  };

  handleSelectRecipe = (event, recipe) => {
    this.setState({
      selectedRecipe: recipe
    });
  };

  render() {
  
    const recipeList = (
      <ul className="bulletlessList">
        {this.props.recipes.map(recipe => (
          <li
            key={recipe.id}
            onClick={event => this.handleSelectRecipe(event, recipe)}
          >
            {recipe.name}
          </li>
        ))}
      </ul>
    );
    const recipeDetails = this.props.selectedRecipe ? (
      <RecipeDetails recipe={this.props.selectedRecipe} />
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
