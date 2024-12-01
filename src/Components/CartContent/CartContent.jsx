import React from 'react'
import Navbar from '../Navbar/Navbar'
import CartElements from './CartElements'
import CartTotal from './CartTotal'



const CartContent = () => {
  return (
    <div className='CartContent'>
      <Navbar/>
      <CartElements/>
      <CartTotal/>
      
    </div>
  )
}

export default CartContent
