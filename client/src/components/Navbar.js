import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  
  const [location, setLocation] = useState('dashboard')

  return (
    <div>
      <Link to='/calculator'>
        <img></img>
        <span>Calculator</span>
      </Link>

      <Link to='/dashboard'>
        <img></img>
        <span>Home</span>
      </Link>

      <Link to='/myfoods'>
        <img></img>
        <span>My Foods</span>
      </Link>
    </div>
  )
}