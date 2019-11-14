import React, { Component } from 'react';

export default class Zip extends Component {

    render() {
        return (
            <>
                <input type="number" onBlur={this.props.getTheWeatherFunction} />
            </>
        );
    }
}