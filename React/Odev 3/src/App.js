import React from 'react';
import './App.css';
import { LocationProvider } from './context/LocationContext';
import Container from './component/container';


function App() {
  return (
    <LocationProvider>
      <Container />
    </LocationProvider>
  );
}

export default App;
