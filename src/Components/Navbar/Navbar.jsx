import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='navbar'>
          <NavLink to="/">
          <h1 className='navbar-logo'>SHOP</h1>
          </NavLink>

          
            
            <NavLink className='navbar-cart' to="/cart">🛒</NavLink>
        </nav>
      
    </div>
  )
}

export default Navbar
