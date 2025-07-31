import { WeatherData } from "./types";

export const FetchWeatherByCity = async (
  city: string
): Promise<WeatherData> => {
  try {
    console.log("Fetching weather for city:", city);
    const geores = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const geoData = await geores.json();
    console.log("sdfsdf", geoData);
    if (!geoData.results || geoData.results.length === 0) return null;
    const { latitude, longitude, name, country } = geoData.results[0];

    const weatherres = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherres.json();
    return {
      city: name,
      country,
      temperature: weatherData.current_weather.temperature,
      windspeed: weatherData.current_weather.windspeed,
      time: weatherData.current_weather.time,
    };
  } catch (error) {
    console.error("Weather fetch failed", error);
    return null;
  }
};
