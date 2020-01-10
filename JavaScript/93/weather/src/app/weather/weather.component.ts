import { Component, Input, OnChanges } from '@angular/core';
import {  Observable } from 'rxjs';
import { WeatherService } from '../shared/weather.service';
import {Weather} from "../shared/weather";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements  OnChanges  {
  @Input()
  zip: string

  weather: Observable<Weather>


  constructor(private weatherService: WeatherService,  ) { }

  ngOnChanges() {
    this.weather = this.weatherService.getWeather(this.zip);
  }

}
