import React from 'react';
import { Link } from 'react-router-dom';



const categories = [
    { id: 'remeras', name: 'remeras' },
    { id: 'paletas', name: 'Paletas💎' },
    { id: "pelotas", name: 'Pelotas' },
    { id: "accesorios", name: 'Accesorios' }
];

const CategoryMenu = (props) => {
     
    return (
        <nav>
            <h3 className='navbar-category'>Explorá nuestras CATEGORIAS</h3>
            <ul>
                <Link type='button' className="btn btn-success" to="/">Todos los Productos</Link>
                {categories.map(category => (
                    <>
                        <Link  type='button' className='btn btn-outline-info' to={`/productos/category/${category.id}`}>{category.name}</Link>
                    </>
                ))}
            </ul>
        </nav>
    );
};

export default CategoryMenu;

