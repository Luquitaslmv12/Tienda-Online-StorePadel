import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import CategoryMenu from '../CategoryMenu'

const Navbar = () => {
  return (
    
    <div className='nav-container'>
        <nav className='navbar'>
          <Link to="/">
          <h1 className='navbar-logo'>SHOP</h1>
          </Link>

          <CategoryMenu/>
            
            <Link className='navbar-cart' to="/cart">🛒</Link>
        </nav>
      
    </div>
  )
}

export default Navbar
