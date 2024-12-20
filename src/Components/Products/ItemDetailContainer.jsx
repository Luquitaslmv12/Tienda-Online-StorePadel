import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Context } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import './itemDetailContainer.css';
import ItemCount from './ItemCount';
import { getSingleProduct } from '../../firebase/firebase';
import Banner from '../Banner/Banner';





const ProductDetail = (prod) => {

  const {cart, setCart} = useContext(Context)
  const [singleProd, setSingleProd] = useState([]);
  const { Id } = useParams();
  const [showItemCount, setShowItemCount] = useState(true);

 

  const buyProducts = (quantity) => {
   
    const existingProduct = cart.find(item => item.id === Id); 

    if (existingProduct) {
        const updatedCart = cart.map(item => {
            if (item.id === Id) { 
                return { ...item, quantity: item.quantity + quantity };
            }
            return item;
        });
        setCart(updatedCart);
    } else {
        
        const productWithQuantity = { ...singleProd, id: Id, quantity }; 
        setCart([...cart, productWithQuantity]);
    }

    toast.success("PRODUCTO SUMADO AL CARRITO!!!", {
        autoClose: 5000,
        position: 'top-left',
        className: 'foo-bar',
        theme: 'dark'
    });

    setShowItemCount(false);
};

  useEffect(() => {
    getSingleProduct(Id).then((product) =>
    setSingleProd(product) 
    ); 
  }, []);

  
  
  return (
   
   <>
   <Navbar/>
   <Banner/>
   
   
    
   <div className='card-container'>
   <p><Link className="btn btn-primary" to="/">←VOLVER</Link></p>
      <div key={Id}  className="card-detail" style={{width: '16rem'}}>
          <img src={singleProd.image} className="card-img-top"/>
              <div className="card-body">
                    <h5 className="card-title">{singleProd.title}</h5>
                    <h5 className="price">💰 ${singleProd.price}</h5>
                    <h5>{singleProd.description}</h5>
                    {showItemCount && ( 
                        <ItemCount onAdd={(quantity) => buyProducts(quantity)} />
                    )
                    }
              </div>   
          <ToastContainer/>
     </div>
  </div>
   
    </>
  
  );
  

};

export default ProductDetail
