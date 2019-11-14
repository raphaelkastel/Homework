import React, { Component } from 'react';

export default class Weather extends Component {
    
    render() {
        const { location, description} = this.props;
        return (
                <div>
                    {location} {description}
                </div>
        );
    }
}