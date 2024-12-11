import React from 'react'
import Navbar from '../Navbar/Navbar'
import CartElements from './CartElements'
import CartTotal from './CartTotal'
import './CartContent.css'




const CartContent = () => {
  return (
    <>
    <Navbar/>
    <div className='CartContent'>
      
      <h1>🔶¡¡¡Tu carrito de compras!!!🔶</h1>
      <CartElements/>
      <CartTotal/>
      
    </div>
    </> 
  )
}

export default CartContent
