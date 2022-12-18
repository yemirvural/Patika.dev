import React from 'react';
import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import Container from './component/container';


function App() {
  return (
    <WeatherProvider>
      <Container />
    </WeatherProvider>
  );
}

export default App;
