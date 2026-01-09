import React from 'react'
import Dosa from './components/Dosa'
import './App.css';
import Nav from './components/Nav';

const App = () => {
  return (
  <>
  <Nav/>
  <h1 className='heading'>Dosa Buying Website </h1>
    <div className='main-container'>
      <Dosa number = {1} name= "Paneer Dosa" price={200}/>
      <Dosa number = {2} name= "Masala Dosa" price={300}/>
      <Dosa number = {3} name= "Cheese Dosa" price={250}/>
      <Dosa number = {4} name= "Rava Dosa" price={230}/>
    </div>
  </> 
  )
}

export default App

