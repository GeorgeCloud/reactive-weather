import './App.css';
import { useState } from 'react'
import WeatherDisplay  from './WeatherDisplay.js'
import getWeather from './weather.js'

function App() {
  const [temp, setTemp] = useState('');

  return (
    <div className="App">
      <WeatherDisplay
        weather
      />

      <form onSubmit={e => {
        e.preventDefault();
        getWeather(94806, 'imperial');
      }}>
        <input placeholder="Zipcode" />
        <button type="submit">Submit</button>

        <div>
          <select>
            <option value="celcius">Celcius</option>
            <option value="farenheit">Farenheit</option>
          </select>

          <input type='radio' name='sysType' />metric
          <input type='radio' name='sysType' />imperial
          <input type='radio' name='sysType' />standard
        </div>
      </form>
    </div>
  );
}

export default App;
