import React, { createContext, useContext, useState } from "react";

const LocationContext = createContext();

// const apiKey = "";

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState('');
    const [coordinates, setCoordinates] = useState({ lon: 28.9662187, lat: 41.0091982 });
    const [autoLocate, setAutoLocate] = useState(false);

    const values = {
        location,
        setLocation,
        coordinates,
        setCoordinates
    };
    return <LocationContext.Provider value={values}>{children}</LocationContext.Provider>;
};

export const useLocation = () => useContext(LocationContext);