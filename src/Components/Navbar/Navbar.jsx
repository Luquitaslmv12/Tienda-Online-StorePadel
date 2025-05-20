import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Store, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Context } from "../../Context/Context";
import CategoryMenu from "../Category/CategoryMenu";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(Context);
  const totalUnits = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  const getCartBadgeClass = () => {
    if (totalUnits === 0) return "hidden";
    if (totalUnits <= 5) return "cart-badge small";
    if (totalUnits <= 10) return "cart-badge medium";
    return "cart-badge large";
  };

  return (
    <motion.header
      className="nav-container shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="navbar d-flex justify-content-between align-items-center px-4 py-2">
        <div className="d-flex align-items-center gap-3">
          <Menu className="d-md-none" />
          <Link
            to="/"
            className="navbar-logo d-flex align-items-center text-decoration-none text-dark"
          >
            <Store className="me-2 text-warning" size={30} />
            <h2 className="m-0 fw-bold">ACE PADEL</h2>
          </Link>
        </div>

        <div className="d-none d-md-block">
          <CategoryMenu />
        </div>

        <div className="navbar-cart position-relative">
          <Link to="/cart" className="text-dark position-relative">
            <ShoppingCart size={28} />
            {totalUnits > 0 && (
              <span className={getCartBadgeClass()}>{totalUnits}</span>
            )}
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
