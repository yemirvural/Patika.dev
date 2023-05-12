import React, { useEffect } from 'react'
import styles from './styles.module.css';
import { GoChevronDown } from "react-icons/go";
import { useLocation } from '../../context/LocationContext';
import { useWeather } from '../../context/WeatherContext';

function Header() {
  const { location, setLocation, coordinates, setCoordinates, autoLocate, setAutoLocate } = useLocation();
  const { setWeather } = useWeather();

  useEffect(()=>{
    findLocation()
  }, [coordinates]);

  const findCoordinates = (e) => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setCoordinates({ lon: data[0].lon, lat: data[0].lat })
      })
      .catch((error) => console.log(error))
  }

  const findLocation = () => {
    console.log(coordinates)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const allData = [data.list[4], data.list[12], data.list[20], data.list[28], data.list[36]]; // Data coming per days at 12.00'clock weather forecast
        setWeather(allData)
        setLocation(data.city.name)
      })
      .catch(e => console.log(e))
    }

  return (
    <div className={styles.header}>
      <div className={styles.inputContainer}>
        <form action="submit" onSubmit={findCoordinates}>
          <input
            value={location}
            type="text"
            name=""
            id=""
            onChange={(e) => setLocation(e.target.value)}
          />
        </form>
        <span>
          <GoChevronDown />
        </span>

      </div>
    </div>
  )
}

export default Header
