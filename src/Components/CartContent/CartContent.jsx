import React from 'react'
import Navbar from '../Navbar/Navbar'
import CartElements from './CartElements'
import CartTotal from './CartTotal'
import { Link } from 'react-router-dom';
import './CartContent.css'
import './CartWidget'



const CartContent = () => {
  return (
    <>
    <Navbar/>
    <div className='CartContent'>
    <h1><Link type='button' className='back' to="/">←VOLVER</Link></h1>
      <h1>🔶¡¡¡Tu carrito de compras!!!🔶</h1>
      
      <CartElements/>
      <CartTotal/>
      
    </div>
    </>   
  )
}

export default CartContent
