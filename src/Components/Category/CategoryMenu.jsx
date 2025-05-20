import React from "react";
import { Link } from "react-router-dom";
import "./CategoryMenu.css";
import { motion } from "framer-motion";

const categories = [
  { id: "remeras", name: "👕 Remeras" },
  { id: "paletas", name: "🏓 Paletas" },
  { id: "pelotas", name: "🥎 Pelotas" },
  { id: "accesorios", name: "🖲️ Accesorios" },
];

const CategoryMenu = () => {
  return (
    <motion.nav
      className="category-nav my-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="navbar-category text-center mb-3">
        🛍️ Explorá nuestras <span className="text-primary">CATEGORÍAS</span>
      </h3>
      <ul className="category-list d-flex flex-wrap justify-content-center gap-3">
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link className="btn btn-dark" to="/">
            🌐 Todos los Productos
          </Link>
        </motion.li>
        {categories.map((category) => (
          <motion.li
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              className="btn btn-outline-info"
              to={`/productos/category/${category.id}`}
            >
              {category.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default CategoryMenu;
