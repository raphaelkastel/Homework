import React, { Component } from "react";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import AddRecipe from "./AddRecipe";

export default class App extends Component {
  state = {
    /*recipes: [
      {
        id: 1,
        name: 'Chulent',
        ingredients: ['meat', 'potatoes', 'all sorts of beans'],
        directions: ['add ingredients to pot', 'cook for many hours'],
        picture: 'https://blog.shabbat.com/wp-content/uploads/2015/06/a1.jpg'
      },
      {
        id: 2,
        name: 'Macaroni',
        ingredients: ['macaroni', 'water', 'salt'],
        directions: ['add ingredients to pot', 'cook for 10 minutes'],
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDVL2DD4me3bX-rWF6DwGsHquSdUW3vkubGTgvfeanC7fg164&s'
      }
    ]//,
    //selectedRecipe: null*/
    recipes: []
  };

  /*handleSelectRecipe = recipe => {
    //console.log('Recipe selected', recipe);
    this.setState({
      selectedRecipe: recipe
    });
  }*/

  handleAddRecipe = recipe => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3000/api/recipes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe)
      });
      const content = await rawResponse.json();
      const recipes = [...this.state.recipes, content];
      this.setState({
        recipes: recipes
      });
    })();
  };

  getRecipeDetails(match) {
    const selectedRecipe = this.state.recipes.find(
      r => r.id === +match.params.recipeId
    ); // + makes it a number
    return selectedRecipe ? (
      <RecipeDetails recipe={selectedRecipe} />
    ) : (
      <h3>Please choose one of our delicious recipes</h3>
    );
  }
  getRecipes() {
    try {
      (async () => {
        const response = await fetch("http://localhost:3000/api/recipes");
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const loadedRecipes = await response.json();
        this.setState({
          recipes: loadedRecipes
        });
      })();
    } catch (err) {}
  }
  componentDidMount() {
    this.getRecipes();
  }
  render() {
    /*const recipeDetails = this.state.selectedRecipe ?
      <RecipeDetails recipe={this.state.selectedRecipe} /> :
      <h3>Please choose one of our delicious recipes</h3>;*/

    // <RecipeList recipes={this.state.recipes} onSelectRecipe={this.handleSelectRecipe} />}
    // <Route path="/recipe/:recipeId" render={() => recipeDetails} />
    return (
      <div className="container">
        <div>
          <Header />
          <Switch>
            {/*<Route path="/" component={Test} />*/}
            <Route
              path="/recipes/"
              render={() => <RecipeList recipes={this.state.recipes} />}
            />
            <Route
              path="/recipe/:recipeId"
              render={({ match }) => this.getRecipeDetails(match)}
            />
            <Route
              path="/api/recipes"
              render={routeProps => (
                <AddRecipe onAddRecipe={this.handleAddRecipe} {...routeProps} />
              )}
            />
            <Redirect to="/recipes" />
          </Switch>
        </div>
      </div>
    );
  }
}

/*class Test extends Component {
  render() {
    console.log(this.props);
    return (
      <div>{JSON.stringify(this.props)}</div>
    );
  }
}*/
