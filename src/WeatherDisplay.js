// Only WeatherDisplay partial if temp === true
// else return ()

function WeatherDisplay(props){
  const { name, temp, feelsLike, desc } = props;

  return (
    <div>
      <h1>{temp}°</h1>
      <h3>{name}</h3>
      <p>Feels like: {feelsLike}°</p>
      <p>{desc}</p>
    </div>
  )
}

export default WeatherDisplay
