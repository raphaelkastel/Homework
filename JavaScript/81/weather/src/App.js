import React, { Component } from 'react';
import Zip from './Zip';
import Weather from './Weather';
import $ from 'jquery';
export default class App extends Component {
  state = {

    location: null,
    description: null,
  };

  getTheWeatherFunction(e) {
    const zip = e.target.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=cb7c71219cf09eb0bb414b932669be97&zip=${zip}&units=1`)
      .then((responseText) => responseText.json())
      .then(weatherData => {
        if(weatherData.main){
        this.setState({ 
          location: weatherData.name, 
          description: `${weatherData.main.temp}K and ${weatherData.weather[0].description}`
        });
      }
        console.log(this.state.location);
        console.log(this.state.description)
      }
        
      )

  };


  render() {

    return (
      <div>
        <Zip getTheWeatherFunction={this.getTheWeatherFunction.bind(this)} />
        <Weather location = {this.state.location} description = {this.state.description}/>
      </div >
    );
  }
}
