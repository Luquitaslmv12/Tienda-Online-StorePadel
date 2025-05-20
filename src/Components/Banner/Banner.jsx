import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Banner.css";

const Banner = () => {
  return (
    <motion.div
      className="banner"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="banner-container text-center py-5">
        <h1 className="display-4 fw-bold">
          <Sparkles className="me-2 text-warning" size={40} />
          ACE PADEL STORE
        </h1>
        <p className="lead text-secondary">La tienda con más ventas online</p>
      </div>
    </motion.div>
  );
};

export default Banner;
