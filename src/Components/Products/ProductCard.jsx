import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import "./ProductDetail.css";

export default function ProductCard({ prod }) {
  return (
    <motion.div
      className="card shadow-sm"
      style={{ width: "18rem", borderRadius: "1rem", overflow: "hidden" }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={prod.image}
        className="card-img-top"
        alt={prod.title}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{prod.title}</h5>
        <p className="price fw-bold text-success">💰 ${prod.price}</p>
        <Link
          to={`/productos/id/${prod.id}`}
          className="btn btn-outline-primary"
        >
          <Eye className="me-2" size={20} /> Ver detalles
        </Link>
      </div>
    </motion.div>
  );
}
