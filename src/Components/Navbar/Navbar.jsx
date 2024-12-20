import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import CategoryMenu from '../Category/CategoryMenu'
import { useContext } from 'react';
import { Context } from '../../Context/Context';


const Navbar = () => {
  const { cart } = useContext(Context);
  const totalUnits = cart.reduce((acc, prod) => acc + prod.quantity, 0);


  const renderCartCount = () => {
    if (totalUnits === 0) {
      return null; 
    } else if (totalUnits > 0 && totalUnits <= 5) {
      return <span className="cart-count small">{totalUnits}</span>; 
    } else if (totalUnits > 5 && totalUnits <= 10) {
      return <span className="cart-count medium">{totalUnits}</span>; 
    } else {
      return <span className="cart-count large">{totalUnits}</span>; 
    }
  };

  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to="/">
          <h1 className='navbar-logo'>SHOP</h1>
        </Link>
        <CategoryMenu />
        <div className='navbar-cart'>
       
        {renderCartCount()}
        
        <Link to="/cart">🛒</Link>
        </div>
      </nav>
    </div>
    
  );
}

export default Navbar;



