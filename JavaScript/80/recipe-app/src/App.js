
import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe';
import RI from './RI';

class App extends Component {

    state = {
        recipes: [
            {
                id: 1,
                name: 'waffles',
                instructions: 'use waffle batter',
            },
            {
                id: 2,
                name: 'squid',
                instructions: 'why would you eat this?',
            }
        ],
        selectedRecipe: null,
    }

   
    getRecipes() {
        return this.state.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} setRecipe={this.setRecipe.bind(this)} />);
    }

    setRecipe(recipe) { 
        this.setState({
            selectedRecipe: recipe
        });
    }

    getRecipeinfo() {
        if(this.state.selectedRecipe){
        return <RI key={this.state.selectedRecipe.id} recipe={this.state.selectedRecipe} />;
    }
    }

    render() {
        const Recipes = this.getRecipes();
        const Recipeinfo = this.getRecipeinfo();

        return (
            <div className="App">
                <header className="App-header">
                    {Recipes}   
                    {Recipeinfo}
                </header>
            </div>
        );
    }
}

export default App;