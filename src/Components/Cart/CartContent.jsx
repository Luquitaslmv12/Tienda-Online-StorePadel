import { ArrowLeftCircle, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";
import "./CartContent.css";

const CartContent = () => {
  return (
    <>
      <Navbar />
      <div className="CartContent container mt-4">
        <Link to="/" className="btn btn-outline-primary mb-3">
          <ArrowLeftCircle className="me-2" />
          Volver al inicio
        </Link>

        <motion.h1
          className="text-center mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <ShoppingCart className="me-2 text-warning" />
          ¡¡¡Tu carrito de compras!!!
        </motion.h1>

        <CartElements />
        <CartTotal />
      </div>
    </>
  );
};

export default CartContent;
