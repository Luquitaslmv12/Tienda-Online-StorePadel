import React, { useState, useEffect} from 'react'
import { filterProductsByCategory, getProducts, getSingleProduct } from '../../firebase/firebase';
import {useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import ProductCard from './ItemList';
import 'react-toastify/dist/ReactToastify.css';
import './ItemDetailContainer.css'

 const Products = () => {
   const [singleProd, setSingleProd] = useState([]);
   const [myProds, setMyProds] = useState([]);
   const { Id } = useParams();
   const [loading, setLoading] = useState(true);
   const { categoryId } = useParams();



   useEffect(() => {
    const fetchProducts = async () => {
        try {
          if (Id) {
            const singleProd = await getSingleProduct(Id); 
            setSingleProd(singleProd);
            setMyProds([]);
            console.log('dentro del detail')

          } else if (categoryId) {
          const products = await filterProductsByCategory(categoryId); 
          setMyProds(products);
          setSingleProd([])
      } else {
        const allProducts = await getProducts();
        setMyProds(allProducts);
      }
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      setLoading(false);
    }
  };

    fetchProducts();
  }, [categoryId]); 



  if (loading) {
    return <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div> 
  }

   return (
    <>
    <Navbar/>
    <Banner/>

    <div className='card-container'>   
      {myProds &&  (
         myProds.map((prod) => <ProductCard key={prod.id} prod={prod} />))}

      {myProds !=  (
          <h1>No hay productos para mostrar!</h1>)}
        
    </div>
     </>
   );
}

export default Products



