import React, { useState, useContext } from "react";
import { Context } from "../../Context/Context";
import { sendOrder } from "../../firebase/firebase";
import "./CheckoutForm.css";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, User, Send } from "lucide-react";

const CheckoutForm = () => {
  const { cart, setCart } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("El carrito está vacío. No puedes finalizar la compra.");
      navigate("/");
      return;
    }

    const order = {
      buyer: { ...formData },
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.price * item.quantity,
      })),
      totalAmount: cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      date: new Date().toISOString(),
    };

    try {
      const orderId = await sendOrder(order);
      alert(`Orden enviada con ID: ${orderId}. Gracias por tu compra :)`);
      setCart([]);
      navigate("/");
    } catch (error) {
      console.error("Error al enviar la orden:", error);
      alert("Hubo un problema al enviar la orden. Inténtalo de nuevo.");
    }
  };

  return (
    <>
      <Navbar />
      <Banner />
      <motion.div
        className="container mt-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center mb-4 fw-bold">🧾 Finalizar Compra</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 shadow-lg p-4 rounded bg-white">
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">
                  <User size={18} className="me-2" />
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  <Mail size={18} className="me-2" />
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="phone" className="form-label">
                  <Phone size={18} className="me-2" />
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
              >
                <Send size={18} />
                Enviar Orden
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CheckoutForm;
