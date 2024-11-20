import React, {useContext} from 'react'
import { Context } from '../../Context/Context';

const CartItemCounter = (product) => {
    const {cart, setCart} = useContext(Context)
  return (
    <>
      <p className='counter-button'>
        -
      </p>
      <p>01</p>
      <p className='counter-button'>+</p>
    </>
  )
}

export default CartItemCounter
