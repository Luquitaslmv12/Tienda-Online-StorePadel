import React, { useState, useEffect } from 'react';

const ItemCount = ({ onAdd, initialCount = 1 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  const handleAddToCart = () => {
      onAdd(count);
      setCount(initialCount); // Resetea el contador a la cantidad inicial
  };

  useEffect(() => {
      setCount(initialCount); // Actualiza el contador si cambia la cantidad inicial
  }, [initialCount]);

  return (
    <div>
      <button className="btn btn-primary" onClick={decrement}>-</button>
      <span>{count}</span>
      <button className="btn btn-primary" onClick={increment}>+</button>
      <button className="btn btn-primary" onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;