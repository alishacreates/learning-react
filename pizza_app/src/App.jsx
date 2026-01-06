
import React from 'react'
import Pizza from './components/Pizza'
import './App.css';

const App = () => {
  return (
    <div className='main-container'>
      <Pizza number = {1} name= "Margherita" price="200"/>
      <Pizza number = {2} name= "Paneer Tikka" price="300"/>
      <Pizza number = {3} name= "Farmhouse" price="250"/>
    </div>
  )
}

export default App
