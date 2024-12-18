import { updateProduct } from  '../../firebase/firebase';
import { Link, useParams } from 'react-router-dom';
import './Products.css'

export default function ProductCard({ prod, singleProd, onClick}) {

  const { Id } = useParams();





  return (
    // <div className='card-container' key={prod.id}>

      <div  key={Id} className="card" style={{width: '16rem'}}>
          <img src={prod.image} className="card-img-top"/>
            
              <div className="card-body">
                    <h5 className="card-title">{prod.title}</h5>
                    <h5 className="price">💰 ${prod.price}</h5>
                    {/* {useParams(true) &&(
                      <h5>💰 ${prod.description}</h5>
                    )} */}
                    
                    <button className="btn btn-outline-info"> <Link onClick={onClick} to={`/productos/id/${prod.id}`}>Más detalles</Link> </button>
              </div>
           
        
      </div>
    // </div>
  );
}








