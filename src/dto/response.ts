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
    current: result.current,
  };
}

export function forecast(result: any, responseMeta: ForecastResponseMeta) {
  const forecastdayArry = result.forecastday.map((f: any) => {
    const astro = {
      [responseMeta.moon_illumination]: f.moon_illumination,
      [responseMeta.moon_phase]: f.moon_phase,
      [responseMeta.moonrise]: f.moonrise,
      [responseMeta.moonset]: f.moonset,
      [responseMeta.sunrise]: f.sunrise,
      [responseMeta.sunset]: f.sunset,
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
