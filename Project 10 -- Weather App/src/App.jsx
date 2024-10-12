import "./App.css";
import { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherLogic from "./components/WeatherLogic";

function App() {
  const [value, setValue] = useState()
  const [apiData, setApiData] = useState({});
  function onClick(val)
  {
    setValue(val);
  }
  useEffect(() => { 
    if (value) {
      fetch(`http://api.weatherapi.com/v1/current.json?key=ee0f5880bafa4b24b6700727241609&q=${value}&aqi=no`)
        .then((res) => res.json())
        .then((res) => {
          setApiData(res);
          console.log(res); 
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [value]);

  return (
    <>
      <div class="container">
       <WeatherDisplay funct={onClick}></WeatherDisplay>
       <WeatherLogic data={apiData}></WeatherLogic>
      </div>
    </>
  );
}

export default App;
