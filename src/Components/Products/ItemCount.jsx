import React, { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  const handleAddToCart = () => {
    onAdd(count);
    setCount(1);
  };

  return (
    <div className="text-center mt-3">
      <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
        <button className="btn btn-outline-secondary" onClick={decrement}>
          <Minus />
        </button>
        <span style={{ fontSize: "24px" }} className="fw-bold text-success">
          {count}
        </span>
        <button className="btn btn-outline-secondary" onClick={increment}>
          <Plus />
        </button>
      </div>
      <button className="btn btn-success btn-lg" onClick={handleAddToCart}>
        <ShoppingCart className="me-2" /> Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
