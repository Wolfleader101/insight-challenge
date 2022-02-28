export interface GeoCoderData {
  id: string;
  type: string;
  text: string;
  language: string;
  place_name: string;
  center: number[];
}

export interface GeoCoderEvent {
  result: GeoCoderData;
}

export interface DailyWeatherTemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface DailyWeatherFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface DailyWeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface DailyWeatherData {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: DailyWeatherTemp;
  feels_like: DailyWeatherFeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: DailyWeatherInfo[];
  clouds: number;
  pop: number;
  uvi: number;
}

export interface DailyWeatherResponse {
  lat: number;
  long: number;
  timezone: string;
  timezone_offset: string;
  daily: DailyWeatherData[];
}
