import React from 'react'

const Pizza = (props) => {
  return (
    <div>
        <h2> Pizza name: </h2>
        <p>{props.name}</p>
    </div>
  )
}

export default Pizza