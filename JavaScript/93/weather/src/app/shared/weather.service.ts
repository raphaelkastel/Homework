import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { map} from "rxjs/operators";
import { Weather,WeatherServerProps } from "./weather";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(zip): Observable<Weather> {
      let test = this.http.get<WeatherServerProps>(
        `http://api.openweathermap.org/data/2.5/weather?appid=cb7c71219cf09eb0bb414b932669be97&zip=${zip}&units=1`
      ).pipe(
        map(res => ({
          description: `${res.main.temp}K and ${res.weather[0].description}`,
          location: `${res.name}`
        }))
      )
      return test;
  }
  
}
