import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Context } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import './ProductDetail.css';
import ItemCount from '../Products/ItemCount';
import { getSingleProduct } from '../../firebase/firebase';
import Banner from '../Banner/Banner';
import ProductCard from './ProductCard';





const ProductDetail = (prod) => {

  const {cart, setCart} = useContext(Context)

  const [singleProd, setSingleProd] = useState([]);
  const [myProds, setMyProds] = useState([]);
  const { Id } = useParams();
  const [showItemCount, setShowItemCount] = useState(true);

 

  const buyProducts = (quantity) => {
    // Usa el Id de la URL para buscar el producto en el carrito
    const existingProduct = cart.find(item => item.id === Id); // Asegúrate de que el Id sea el mismo tipo

    if (existingProduct) {
        const updatedCart = cart.map(item => {
            if (item.id === Id) { // Usa el Id de la URL
                return { ...item, quantity: item.quantity + quantity };
            }
            return item;
        });
        setCart(updatedCart);
    } else {
        // Asegúrate de que singleProd tenga el Id correcto
        const productWithQuantity = { ...singleProd, id: Id, quantity }; // Agrega el Id aquí
        setCart([...cart, productWithQuantity]);
    }

    toast.success("PRODUCTO SUMADO AL CARRITO!!!", {
        autoClose: 5000,
        position: 'top-left',
        className: 'foo-bar',
        theme: 'dark'
    });

    setShowItemCount(false); // Oculta el ItemCount después de añadir al carrito
};

  useEffect(() => {
     getSingleProduct(Id).then((product) =>
      setSingleProd(product)
     
    ); 

   
  }, []);

  
  
  console.log(Id)
  console.log(prod)
  console.log(prod)
  console.log(singleProd)
  return (
   
   <>
   <Navbar/>
   <Banner/>
   
   
    
   <div className='card-container'>
   <p><Link type='button' className='back' to="/">←VOLVER</Link></p>
   <div key={Id}  className="card-detail" style={{width: '16rem'}}>
          <img src={singleProd.image} className="card-img-top"/>
            
              <div className="card-body">
                    <h5 className="card-title">{singleProd.title}</h5>
                    <h5 className="price">💰 ${singleProd.price}</h5>
                    <h5>{singleProd.description}</h5>
                    {/* <button className="btn btn-primary" onClick={() => buyProducts(singleProd)}>SUMAR AL CARRITO 🛒</button> */}
                    {showItemCount && ( // Renderiza ItemCount solo si showItemCount es true
                        <ItemCount onAdd={(quantity) => buyProducts(quantity)} />
                    )
                    }{singleProd.id == Id}
                    
              </div>
             
              
           
        <ToastContainer/>
      </div>
   </div>
   
    </>
  
  );
  

};

export default ProductDetail
