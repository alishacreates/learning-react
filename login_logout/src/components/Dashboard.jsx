import React from 'react'
import './Dashboard.css'

const Dashboard = (props) => {
  return (
    <div className='db-container screen-container'>
        <h1>DASHBOARD</h1>
        <h2>Welcome, {props.currentUser}</h2>
        <button onClick={props.logout}>Logout</button>
    </div>
  )
}

export default Dashboard