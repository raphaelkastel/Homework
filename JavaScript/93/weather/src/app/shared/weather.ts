export interface Weather {
  description: string;
  location: string;
}
export interface WeatherServerProps {
  main: {
    temp: string;
  };
  weather: {
    description: string;
  };
  name: string;
}
