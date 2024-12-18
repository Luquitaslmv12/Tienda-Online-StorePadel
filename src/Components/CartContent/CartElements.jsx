import './CartContent.css';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import CartWidget from './CartWidget';
import { useParams, Link } from 'react-router-dom';


const CartElements = (prod) => {
    const { cart, setCart } = useContext(Context);
    const { Id } = useParams();


    const deleteProducts = (id) => {
        const newCart = cart.filter((element) => element.id !== id);
        setCart(newCart);
    };

    
    console.log(Id)
    console.log(prod)
    console.log(cart)

    return cart.map((prod) => {
        return (

            
            
            <div className='product-card-container' key={prod.id}>
                <img src={prod.image} alt="product-card" />
                <h5>{prod.title}</h5>
                <h5>Cantidad: {prod.quantity}</h5> {/* Muestra la cantidad */}
                <h5>💰 Precio unitario ${prod.price }</h5>
                <h5>💰 Sub Total: ${prod.price * prod.quantity}</h5> {/* Muestra el total por producto */}
                <h3 className='cart-delete-product' onClick={() => deleteProducts(prod.id)}>
                    ❌
                </h3>
                
          
               
         </div>
            
        );
    });

  
};

export default CartElements;


// import React, {useContext} from 'react'
// import { Context } from '../../Context/Context';
// import CartItemCounter from './CartItemCounter';


// import './CartContent.css'
// const CartElements = () => {

//     const {cart, setCart} = useContext(Context)


//         const deleteProducts = (id) => {
//             const foundId = cart.find((element) => element.id === id)

//             const newCart = cart.filter((element) => {
//                 return element !== foundId
//             })

//             setCart(newCart)

//         }




//     return cart.map((prod)=> {
//         return (
//             <div className='product-card-container'key={prod.id}>
//             <img src={prod.image} alt="product-card"/>
//                     <h5>{prod.title}</h5>
//                     <CartItemCounter product={prod}/>
//                     <h5>💰 ${prod.price}</h5>
//                     <h3 className='cart-delete-product' onClick={() => deleteProducts(prod.id)}>
//                         ❌
//                     </h3>
        
//                 </div>
        
           
//         )

//     })

 
// }

// export default CartElements
