import { CurrentResponseMeta, ForecastResponseMeta } from "../types";

export function current(result: any, responseMeta: CurrentResponseMeta) {
  const location = {
    [responseMeta.country]: result.location.country,
    [responseMeta.lat]: result.location.lat,
    [responseMeta.localtime]: result.location.localtime,
    [responseMeta.lon]: result.location.lon,
    [responseMeta.name]: result.location.name,
    [responseMeta.region]: result.location.region,
    [responseMeta.tz_id]: result.location.tz_id,
    [responseMeta.name]: result.location.name,
    [responseMeta.region]: result.location.region,
  };

  return {
    ...result,
    location,
  };
}

export function forecast(result: any, responseMeta: ForecastResponseMeta) {
  const forecastdayArry = result.forecast.forecastday.map((f: any) => {
    const astro = {
      [responseMeta.moon_illumination]: f.astro.moon_illumination,
      [responseMeta.moon_phase]: f.astro.moon_phase,
      [responseMeta.moonrise]: f.astro.moonrise,
      [responseMeta.moonset]: f.astro.moonset,
      [responseMeta.sunrise]: f.astro.sunrise,
      [responseMeta.sunset]: f.astro.sunset,
    };

    return {
      ...f,
      astro,
    };
  });

  return {
    ...result,
    forecast: { forecastdayArry },
  };
}
