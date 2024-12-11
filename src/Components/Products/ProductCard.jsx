import { updateProduct } from  '../../firebase/firebase';
import { Link, useParams } from 'react-router-dom';
import './Products.css'

export default function ProductCard({ prod }) {

  const { id } = useParams();


  const handleUpdate = () => {
    updateProduct(prod.id, { price: 1234 });
  };

  return (
    <div className='card-container' key={prod.id}>

      <div className="card" style={{width: '16rem'}}>
          <img src={prod.image} className="card-img-top"/>
            
              <div className="card-body">
                    <h5 className="card-title">{prod.title}</h5>
                    <h5 className="price">💰 ${prod.price}</h5>
                    <button className="btn btn-outline-info"> <Link to={`/products/${prod.id}`}>Más detalles</Link> </button>
              </div>
           <p>Categoria: {prod.category}</p>
        
      </div>
    </div>
  );
}








