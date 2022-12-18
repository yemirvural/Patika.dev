import React from 'react'
import Content from './content/content'
import Header from './header/header'
import './container.css'

function Container() {
  return (
    <div className='container'>
        <Header/>
        <Content/>
    </div>
  )
}

export default Container