import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryMenu.css'

const categories = [
    { id: 'remeras', name: '👕 Remeras' },
    { id: 'paletas', name: '🏓 Paletas' },
    { id: 'pelotas', name: '🥎 Pelotas' },
    { id: 'accesorios', name: '🖲️ Accesorios' }
];

const CategoryMenu = () => {
    return (
        <nav>
            <h3 className='navbar-category'>Explorá nuestras CATEGORIAS</h3>
            <ul className="category-list">
                <li>
                    <Link type='button' className="btn btn-success" to="/">Todos los Productos</Link>
                </li>
                {categories.map(category => (
                    <li key={category.id}>
                        <Link type='button' className='btn btn-outline-info' to={`/productos/category/${category.id}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default CategoryMenu;

