import React from 'react'
import Navbar from '../Navbar/Navbar'
import CartElements from './CartElements'
import CartTotal from './CartTotal'
import { Link } from 'react-router-dom';
import './CartContent.css'





const CartContent = () => {

  return (
    <>
    <Navbar/>
    <div className='CartContent'>
    <h1 className="text-start">
    <Link to='/' className="btn btn-primary me-2"  style={{ textDecoration: 'none', fontSize: '1.0rem' }} >
      ← VOLVER
    </Link>
    </h1>
      <h1>🔶¡¡¡Tu carrito de compras!!!🔶</h1>
    <CartElements/>
    <CartTotal/>   
    </div>
    </>   
  )
}

export default CartContent
