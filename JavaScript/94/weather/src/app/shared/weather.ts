export interface WeatherServerData {
    name: string;
    weather: [{ description: string, icon: string }];
    main: { temp: number };
}

export interface Weather {
    place: string;
    temp: number;
    description: string;
    picture: string;
}
