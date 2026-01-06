import React from 'react'

const Pizza = (props) => {
  return (
    <div>
        <h2> Pizza </h2>
        <p>Pizza name: {props.name}</p>
        <p>Pizza price: {props.price}</p>
    </div>
  )
}

export default Pizza