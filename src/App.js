import './App.css';
import { useState } from 'react'
import WeatherDisplay  from './WeatherDisplay.js'
import WeatherForm  from './WeatherForm.js'

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="App">
      {
        weatherData &&
        (<WeatherDisplay {...weatherData} />)
      }

      <WeatherForm
        setWeatherData={setWeatherData}
      />
    </div>
  );
}

export default App;
