import React from 'react'
import './Home.css'

const Home = (props) => {
  return (
    <div className='home-container screen-container '>
        <h1>Home Page</h1>
        <button onClick={props.goToSignup}>Sign Up</button>
    </div>
  )
}

export default Home