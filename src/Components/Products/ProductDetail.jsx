import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Context } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import './ProductDetail.css';
import ItemCount from '../Products/ItemCount';




const ProductDetail = () => {

  const {cart, setCart} = useContext(Context)
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Cargando...</p>;


  const buyProducts = (prod) => {

    toast.success("PRODUCTO SUMADO AL CARRO!!!", {
      autoClose: 5000,
      position: 'top-left',
       className: 'foo-bar',
      theme: 'dark'
   });

    setCart([...cart, prod])

  }


  return (
<div>



    <Navbar/>
  

    <div className='card-container'>
    
                    <div className="card" style={{width: '25rem' }} key={product.id}>
                    <img src={product.image} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <h5 className="price">💰 ${product.price}</h5>
                            <span>
                             <p className="card-text">{product.description} </p>
                            </span>
                            <button className="btn btn-primary" onClick={() => buyProducts(product)}>SUMAR AL CARRITO 🛒</button>
                            
    </div>
    {/* <ItemCount/> */}
    </div>
    </div>
    <ToastContainer/>
    </div>
  );
};

export default ProductDetail
