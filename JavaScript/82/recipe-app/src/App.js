import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Recipe from "./Recipe";
import RI from "./RI";
import Navbar from "./Navbar";

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: "waffles",
        instructions: "use waffle batter"
      },
      {
        id: 2,
        name: "squid",
        instructions: "why would you eat this?"
      }
    ],
    selectedRecipe: null,
    selectedRecipeid: 0
  };

  getRecipes() {
    return this.state.recipes.map(recipe => (
      <Recipe
        key={recipe.id}
        recipe={recipe}
        setRecipe={this.setRecipe.bind(this)}
      />
    ));
  }

  setRecipe(recipe) {
    this.setState({
      selectedRecipe: recipe,
      selectedRecipeid: recipe.id
    });
  }
  setRecipebyid(id) {
    let recipe = this.state.recipes.find(recipe => {
      return recipe.name === id;
    });
    this.setRecipe(recipe);
  }

  getRecipeinfo() {
    if (this.state.selectedRecipe) {
      return (
        <RI
          key={this.state.selectedRecipeid}
          recipe={this.state.selectedRecipe}
        />
      );
    }
  }

  render() {
    const Recipes = this.getRecipes();

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Switch>
              <Route
                path="/recipe/:it"
                render={props => (
                  <RI
                    key={this.state.selectedRecipeid}
                    recipe={this.state.selectedRecipe}
                    setRecipebyid={this.setRecipebyid.bind(this)}
                    {...props}
                  />
                )}
              />
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
