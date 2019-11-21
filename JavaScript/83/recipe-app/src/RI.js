import React, { Component } from "react";

export default class RI extends Component {
  constructor(props) {
    super(props);
    if (props.recipe) {
      this.state = {
        name: this.props.recipe.name,
        instructions: this.props.recipe.instructions
      };
    } else {
      this.state = {
        name: "",
        instructions: ""
      };
      if (this.props.match.params.it) {
        this.props.setRecipebyid(this.props.match.params.it);
      }
    }
  }

  render(props) {
      if(this.props.match.params.it !== this.state.name){
        this.props.setRecipebyid(this.props.match.params.it);
        return null;
      }
    return (
      <>
        <h1>{this.state.name}</h1>
        <h2>{this.state.instructions} </h2>
      </>
    );
  }
}
