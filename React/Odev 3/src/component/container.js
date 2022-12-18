import React from 'react'
import Content from './content/content'
import Header from './header/header'
import './container.css'
import { WeatherProvider } from '../context/WeatherContext'

function Container() {
  return (
    <div className='container'>
      <WeatherProvider>
        <Header />
        <Content />
      </WeatherProvider>
    </div>
  )
}

export default Container