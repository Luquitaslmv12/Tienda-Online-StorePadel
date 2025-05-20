import { useContext } from "react";
import { Context } from "../../Context/Context";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CartContent.css";

const CartElements = () => {
  const { cart, setCart } = useContext(Context);

  const deleteProducts = (id) => {
    const newCart = cart.filter((element) => element.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío!");
    } else {
      setCart([]);
    }
  };

  return (
    <div className="row gy-4">
      {cart.map((prod) => (
        <motion.div
          className="col-md-4"
          key={prod.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="card shadow-sm h-100">
            <img
              src={prod.image}
              className="card-img-top p-3"
              alt={prod.title}
            />
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">Cantidad: {prod.quantity}</p>
              <p className="card-text">Precio unitario: ${prod.price}</p>
              <p className="card-text fw-bold">
                Subtotal: ${prod.price * prod.quantity}
              </p>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteProducts(prod.id)}
              >
                <Trash2 className="me-2" /> Quitar
              </button>
            </div>
          </div>
        </motion.div>
      ))}

      {cart.length > 0 && (
        <div className="text-center mt-5">
          <button className="btn btn-danger me-3" onClick={clearCart}>
            Vaciar Carrito
          </button>
          <Link to="/checkout" className="btn btn-success">
            Finalizar Compra
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartElements;
