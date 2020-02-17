import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RecipeList extends Component {
    render() {
        console.log(this.props);
        // <li key={recipe.id} onClick={event => this.props.onSelectRecipe(recipe)}>

        return (
            <ul className="bulletlessList">
                {this.props.recipes.map(recipe =>
                    <li key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                    </li>)}
            </ul>
        );
    }
}