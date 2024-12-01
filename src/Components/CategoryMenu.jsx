import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    { id: 'electronics', name: 'Electrónica' },
    { id: 'jewelery', name: 'Joyería' },
    { id: "men's clothing", name: 'Ropa de Hombre' },
    { id: "women's clothing", name: 'Ropa de Mujer' }
];

const CategoryMenu = () => {
    return (
        <nav>
            <h3 className='navbar-category'>*Categorías*</h3>
            <ul>
                <button className="btn btn-secundary"><Link to="/">Todos los Productos</Link></button>
                {categories.map(category => (
                    <button key={category.id} className='btn btn-secundary'>
                        <Link to={`/products/category/${category.id}`}>{category.name}</Link>
                    </button>
                ))}
            </ul>
        </nav>
    );
};

export default CategoryMenu;

