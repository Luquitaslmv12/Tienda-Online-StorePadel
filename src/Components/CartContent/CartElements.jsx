import React, {useContext} from 'react'
import { Context } from '../../Context/Context';
import CartItemCounter from './CartItemCounter';


import './CartContent.css'
const CartElements = () => {

    const {cart, setCart} = useContext(Context)


        const deleteProducts = (id) => {
            const foundId = cart.find((element) => element.id === id)

            const newCart = cart.filter((element) => {
                return element !== foundId
            })

            setCart(newCart)

        }




    return cart.map((prod)=> {
        return (
            <div className='product-card-container'key={prod.id}>
            <img src={prod.image} alt="product-card"/>
                    <h5>{prod.title}</h5>
                    <CartItemCounter product={prod}/>
                    <h5>💰 ${prod.price}</h5>
                    <h3 className='cart-delete-product' onClick={() => deleteProducts(prod.id)}>
                        ❌
                    </h3>
        
                </div>
        
           
        )

    })

 
}

export default CartElements
