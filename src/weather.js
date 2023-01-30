async function getWeather(zipcode, unitType, setWeatherData){
  const openWeatherApiKey = 'efb86a5fcc194797eb26e76cf24410fe';
  const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${zipcode}&appid=${openWeatherApiKey}&units=${unitType}`;

  const apiResponse = await fetch(openWeatherUrl);
  const weatherData = await apiResponse.json();

  const name = weatherData.name
  const temp = weatherData.main.temp
  const feelsLike = weatherData.main.feels_like
  const desc = weatherData.weather[0].description

  setWeatherData({
    name,
    temp,
    feelsLike,
    desc,
  })
}

export default getWeather
