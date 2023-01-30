async function getWeather(zipcode, unit){
  const openWeatherApiKey = '';

  const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${zipcode}&appid=${openWeatherApiKey}&units=${unit}`;

  const apiResponse = await fetch(openWeatherUrl);

  const weatherData = await apiResponse.json();

  console.log(weatherData);

  return weatherData;
}

export default getWeather
