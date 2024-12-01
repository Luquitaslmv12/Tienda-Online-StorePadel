import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div>
      <button className="btn btn-primary" onClick={decrement}>-</button>
      <span>{count}</span>
      <button className="btn btn-primary" onClick={increment}>+</button>
      <button className="btn btn-primary">Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;