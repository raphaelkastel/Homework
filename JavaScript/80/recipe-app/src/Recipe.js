import React, { Component } from 'react';


export default class Recipe extends Component {
  

    handleClick = () => {
        this.props.setRecipe(this.props.recipe);
    }


    render() {
        return (
            <>
                <h2 onClick={this.handleClick}>{this.props.recipe.name}</h2>
            </>
        );
    }
}
