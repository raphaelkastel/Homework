import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
