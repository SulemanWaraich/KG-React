import React, { useState } from "react";
import styles from './WeatherDisplay.module.css'

function weatherDisplay({funct}) {
  const [userInput, setUserInput] = useState('');
  
  return (
    <>  
      <div class={styles.search}>
      <h1>Weather App</h1>
        <input type="text" id="cityInput" placeholder="Enter city name" value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
        <button id="getWeatherBtn" onClick={()=>funct(userInput)}>Get Weather</button>
      </div>
    </>
  );
}

export default weatherDisplay;
