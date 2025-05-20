import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Context } from "../../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "./ProductDetail.css";
import ItemCount from "./ItemCount";
import { getSingleProduct } from "../../firebase/firebase";
import Banner from "../Banner/Banner";
import { ArrowLeftCircle, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const ProductDetail = (prod) => {
  const { cart, setCart } = useContext(Context);
  const [singleProd, setSingleProd] = useState([]);
  const { Id } = useParams();
  const [showItemCount, setShowItemCount] = useState(true);

  const buyProducts = (quantity) => {
    const existingProduct = cart.find((item) => item.id === Id);

    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === Id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const productWithQuantity = { ...singleProd, id: Id, quantity };
      setCart([...cart, productWithQuantity]);
    }

    toast.success("PRODUCTO SUMADO AL CARRITO!!!", {
      autoClose: 5000,
      position: "top-left",
      className: "foo-bar",
      theme: "dark",
    });

    setShowItemCount(false);
  };

  useEffect(() => {
    getSingleProduct(Id).then((product) => setSingleProd(product));
  }, []);

  return (
    <>
      <Navbar />
      <Banner />

      <p>
        <Link className="btn btn-outline-secondary mb-3" to="/">
          <ArrowLeftCircle className="me-2" /> Volver
        </Link>
      </p>

      <motion.div
        key={Id}
        className="card-detail shadow"
        style={{ maxWidth: "400px", margin: "auto", borderRadius: "1rem" }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <img
          src={singleProd.image}
          className="card-img-top"
          alt={singleProd.title}
        />
        <div className="card-body">
          <h5 className="card-title">{singleProd.title}</h5>
          <p className="price fw-bold">💰 ${singleProd.price}</p>
          <p className="text-muted">{singleProd.description}</p>
          {showItemCount && (
            <ItemCount onAdd={(quantity) => buyProducts(quantity)} />
          )}
        </div>
        <ToastContainer />
      </motion.div>
    </>
  );
};

export default ProductDetail;
