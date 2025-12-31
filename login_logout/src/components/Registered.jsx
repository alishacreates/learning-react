import React from 'react'

const Registered = (props) => {
  return (
    <div className='r-container screen-container'>
        <h2>Sign Up sucessful</h2>
        <button onClick={props.goToLogin}>login</button>
    </div>
  )
}

export default Registered