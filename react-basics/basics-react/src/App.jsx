import React from 'react'
import Pizza from './components/Pizza'
import './App.css';

const App = () => {
  return (
    <div className='main-container'>
      <Pizza name= "Margherita" price="200"/>
    </div>
  )
}

export default App