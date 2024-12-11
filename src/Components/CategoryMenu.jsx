import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    { id: 'electronics', name: 'Electrónica📱' },
    { id: 'jewelery', name: 'Joyería💎' },
    { id: "men's clothing", name: 'Ropa de Hombre🤵' },
    { id: "women's clothing", name: 'Ropa de Mujer💃' }
];

const CategoryMenu = () => {
    return (
        <nav>
            <h3 className='navbar-category'>*Categorías*</h3>
            <ul>
                <Link type='button' className="btn btn-success" to="/">Todos los Productos</Link>
                {categories.map(category => (
                    <>
                        <Link  type='button' className='btn btn-outline-info' to={`/products/category/${category.id}`}>{category.name}</Link>
                    </>
                ))}
            </ul>
        </nav>
    );
};

export default CategoryMenu;

