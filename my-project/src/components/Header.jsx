import React from 'react'
import { Link  } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h1>header  </h1>
        <nav style={{ padding: '1rem', backgroundColor: '#333', marginBottom: '1rem' }}>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', marginRight: '1rem' }}>About</Link>
        <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
        <Link to="/signup" style={{ color: 'white' }}>Signup</Link>
        <Link to="/login" style={{ color: 'white' }}>Login</Link> 
      </nav>
    </div>
  )
}

export default  Header

//login and signup need to be add,login need to be added