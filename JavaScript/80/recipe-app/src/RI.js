import React, { Component } from 'react';


export default class RI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.recipe.name,
            instructions: this.props.recipe.instructions
        };
    }

    render() {
        return (
            <> 
                <h1>{this.state.name}</h1> 
                <h2>{this.state.instructions}</h2>
            </>
        );
    }
}