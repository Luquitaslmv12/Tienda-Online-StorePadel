import React, {useContext} from 'react'
import { Context } from '../../Context/Context';

const CartTotal = () => {
    const {cart} = useContext(Context)

    const total = cart.reduce((acc, elem) => acc + elem.price , 0 )

  return (
    <div className='cartTotal'>
      <h3>🛒Total a pagar: 💲{total}</h3>
    </div>
  )
}

export default CartTotal
