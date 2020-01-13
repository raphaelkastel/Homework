import { Component } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { Weather } from '../shared/weather';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent {
  // weather: Weather;
  weather: Observable<Weather>;

  constructor(private weatherService: WeatherService) { }

  /*getWeather(zip: string, units: string) {
    this.weatherService.getWeather(zip, units)
      .subscribe(weather => {
        this.weather = weather;
      });
  }*/
  getWeather(zip: string, units: string) {
    this.weather = this.weatherService.getWeather(zip, units);
  }
}
