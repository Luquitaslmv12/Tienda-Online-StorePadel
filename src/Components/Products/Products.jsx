import React, {useContext, useState, useEffect} from 'react'
import './Products.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../../Context/Context';
import { Link, useParams } from 'react-router-dom';


const Products = ({prod}) => {

    const {cart, setCart} = useContext(Context)

    const [products, setProducts] = useState([])
    // const [categoria, setCategoria] = useState("");
    const [cargando, setCargando] = useState(false);


    const categoria = useParams().categoria;
    console.log(categoria);


  const buyProducts = (prod) => {

    setCart([...cart, prod])

  }
    
   

    useEffect(() => {
        
        setCargando(true)
    if(categoria) {
      fetch(`https://fakestoreapi.com/products/category/${categoria}`)
      .then(res=>res.json())
      .then(json=>setProducts(json))
      .finally(setCargando(false))
    }else{
      fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then(res=>setProducts(res))
      .finally(setCargando(false))
    }
  }, [categoria])


  const changeCat = (categoria) => {
    setCategoria(categoria)

    
  }

    console.log("por fuera del useEffect", products)


    const handleShowDetails =() =>{
        console.log('click')
        
        toast.success("PRODUCTO DISPONIBLE!!!", {
            autoClose: 5000,
            className: 'foo-bar',
            theme: 'dark'
        });
    }



    

  return (

    // <div className='category'>
    //        <button className="btn btn-primary" onClick={ categoria.categoria == "/")} text="todo" />
    //         <button className="btn btn-primary" onClick={() => changeCat("electronics")} text="malbec" />
    //          <button className="btn btn-primary" onClick={() => changeCat("men's clothing")} text="ropa de hombre" />
    //         <button className="btn btn-primary" onClick={() => changeCat("jewelery")} text="jewelery" />
    //          <button className="btn btn-primary" onClick={() => setCargando(true)} text="cargar" />
            
             
        
    
    <div className='card-container'>


<ul>
<li><Link to="products/category/jewelery">jewelery</Link></li>
<Link to="products/category/men's clothing">Men's Clothing</Link>
</ul>

         

           
        {
            
        
            products?.map(prod => {

                console.log(categoria)
                
               return(
                
                   
                // categoria == prod.category
                

                // ?

                
                
                <div>
                    <div className="card" style={{width: '18rem'}} key={prod.id}>
                    <img src={prod.image} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{prod.title}</h5>
                            <h5 className="price">💰 ${prod.price}</h5>
                            <span>
                            {/* <p className="card-text">{prod.description} </p> */}
                            </span>
                            <button className="btn btn-primary" onClick={() => buyProducts(prod)}>SUMAR AL CARRITO</button>
                        </div>
                    <button className="btn btn-primary" onClick={handleShowDetails}>Consultar disponibilidad ❓</button>
                    <li><Link to={`products/category/${prod.category}`}>asd</Link></li>
                    
                    {/* <ToastContainer/> */}
                    </div>
                
                
                    
                    
                </div>

                // :


                
                // <div>
                //     <div className="card" style={{width: '18rem'}} key={prod.id}>
                //     <img src={prod.image} className="card-img-top"/>
                //         <div className="card-body">
                //             <h5 className="card-title">{prod.title}</h5>
                //             <h5 className="price">💰 ${prod.price}</h5>
                //             <span>
                //             <p className="card-text">{prod.description} </p>
                //             </span>
                //             <button className="btn btn-primary" onClick={() => buyProducts(prod)}>SUMAR AL CARRITO</button>
                //         </div>
                //     <button className="btn btn-primary" onClick={handleShowDetails}>Consultar disponibilidad ❓</button>
                //     </div>
                //     <li><Link to={`products/category/${prod.category}`}>asd</Link></li>
                //     <ToastContainer/>
                // </div>
                
               
               ) 
             
            })
        }   
       
      <ToastContainer/> 
      
    </div>
    /* </div> */
  )


}

export default Products



