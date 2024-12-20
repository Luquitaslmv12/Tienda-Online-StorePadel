import React, { useState } from 'react';

const ItemCount = ({onAdd}) => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  const handleAddToCart = () => {
    onAdd(count); // Llama a la función onAdd con la cantidad actual
    setCount(1); // Opcional: Resetea el contador a 1 después de añadir al carrito
  };


  return (
    <div className="d-flex align-items-center">
        <button className="btn btn-primary btn-lg me-2" onClick={decrement}>-</button>
        <span style={{ fontSize: '21px', color: 'green' }} className="mx-2">{count}</span>
        <button className="btn btn-primary btn-lg ms-2" onClick={increment}>+</button>
        <p>
        <button className="btn btn-success btn-lg ms-2" onClick={handleAddToCart}>Agregar al carrito 🛒</button>
        </p>
    </div>

);
};

export default ItemCount;