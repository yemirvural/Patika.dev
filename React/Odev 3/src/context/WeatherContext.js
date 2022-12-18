import React, { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) =>{ 
    const [weather, setWeather] = useState([]);
    const values = {
        weather,
        setWeather
    };

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
};

export default WeatherContext;