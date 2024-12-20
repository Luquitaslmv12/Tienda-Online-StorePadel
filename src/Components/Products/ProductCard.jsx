import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css'

export default function ProductCard({ prod, onClick}) {
  const { Id } = useParams();

  return (
      <div  key={Id} className="card" style={{width: '16rem'}}>
          <img src={prod.image} className="card-img-top"/>
            
              <div className="card-body">
                    <h5 className="card-title">{prod.title}</h5>
                    <h5 className="price">💰 ${prod.price}</h5>             
                     <Link className="btn btn-primary" onClick={onClick} to={`/productos/id/${prod.id}`}>Más detalles</Link> 
              </div>
      </div>
  );
}








