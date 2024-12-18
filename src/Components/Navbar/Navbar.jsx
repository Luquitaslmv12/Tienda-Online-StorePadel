import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import CategoryMenu from '../CategoryMenu'
import { useContext } from 'react';
import { Context } from '../../Context/Context';


const Navbar = () => {

  const {cart, setCart} = useContext(Context)

  const totalUnits = cart.reduce((acc, prod) => acc + prod.quantity, 0);


  return (
    
    <div className='nav-container'>
        <nav className='navbar'>
          <Link to="/">
          <h1 className='navbar-logo'>SHOP</h1>
          </Link>
          
          <CategoryMenu/>
          {totalUnits > 0 && <span className="cart-count">{totalUnits}</span>}
            <Link className='navbar-cart' to="/cart">🛒</Link>
        </nav>
      
    </div>
  )
}

export default Navbar



