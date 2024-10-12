import styles from './WeatherLogic.module.css'

function weatherLogic({data}) {
  
  return (
    <div id="weatherDisplay" class={styles['weather-info']}>
      <h2 id="cityName">City Name: {data?.location?.name || 'Loading....' }</h2>
      <p id="weatherCondition">Weather Condition: {data?.current?.wind_kph || '--'}</p>
      <p id="temperature">Temperature: -- {data?.current?.temp_c || '--'}°C</p>
      <p id="humidity">Humidity: -- {data?.current?.humidity || '--'}%</p>
    </div>
  );
}

export default weatherLogic;
