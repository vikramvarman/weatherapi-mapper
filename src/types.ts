export interface ForecastApiParams {
  alert: string;
  aqi: string;
  days: string;
  location: string;
}

export interface ForecastApiMeta {
  params: ForecastApiParams;
  url: string;
}

export interface CurrentApiParams {
  aqi: string;
  location: string;
}

export interface CurrentApiMeta {
  params: CurrentApiParams;
  url: string;
}

export interface CurrentResponseMeta {
  country: string;
  lat: string;
  localtime: string;
  lon: string;
  name: string;
  region: string;
  tz_id: string;
}

export interface ForecastResponseMeta {
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}
