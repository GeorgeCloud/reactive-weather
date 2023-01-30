import getWeather from './weather.js'
import { useState } from 'react'

import RadioButton from './RadioButton'

function WeatherForm(props){
  const { setWeatherData } = props;

  const [zipcode, setZipcode] = useState('');
  const [unitType, setUnitType] = useState('metric');

  const allUnits = ['metric', 'imperial', 'standard'];

  return (
    <form onSubmit={e => {
      e.preventDefault();
      getWeather(zipcode, unitType, setWeatherData);
    }}>
      <input
        placeholder="Zipcode"
        onChange={(e) => setZipcode(e.target.value)}
      />

      <button type="submit">Submit</button>

      <div>
        <select
          value={unitType}
          onChange={(e) => setUnitType(e.target.value)}
        >
          <option value="metric">Celcius</option>
          <option value="imperial">Farenheit</option>
          <option value="standard">Standard</option>
        </select>

        {allUnits.map(unit => {
          return(
            <RadioButton
              key={unit}
              label={unit}
              checked={unitType === unit}
              onChange={() => setUnitType(unit)}
            />
          )
        })}
      </div>
    </form>
  )

}

export default WeatherForm
