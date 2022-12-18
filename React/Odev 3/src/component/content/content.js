import React from 'react'
import styles from './styles.module.css';
import { useWeather } from "../../context/WeatherContext";

function Content() {
  const { weather, setWeather } = useWeather();

  const dayCheck = (dt) => new Date(dt).toLocaleDateString("en-EN", { weekday: 'long' })

  const contentPrinter = (array) => {
    return (array.map((el, key) =>
      <div key={key} className={styles.item}>
        <span>{dayCheck(el.dt_txt)}</span>
        <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt="" />
        <div>
          <span>{Math.floor(el.main.temp_max - 273,15)}°C</span>
          <span>{Math.floor(el.main.temp_min - 273,15)}°C</span>
        </div>
      </div>
    )
    )
  }


  return (
    <div className={styles.main} >
      {contentPrinter(weather)}
    </div>
  )
}

export default Content