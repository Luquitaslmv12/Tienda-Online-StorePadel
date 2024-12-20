import React, { useState, useContext } from 'react';
import { Context } from '../../Context/Context';
import { sendOrder } from '../../firebase/firebase';
import './CheckoutForm.css'
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import { useNavigate  } from 'react-router-dom';

const CheckoutForm = () => {
    const { cart, setCart } = useContext(Context);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });


    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        setCart([])
        e.preventDefault();
        

    
        if (cart.length === 0) {
            alert("El carrito está vacío. No puedes finalizar la compra.");
            navigate('/');
            return;
        }

    
        const order = {
            buyer: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
            },
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
                subtotal: item.price * item.quantity,
            })),
            totalAmount: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
            date: new Date().toISOString(),
        };

   
        try {
            const orderId = await sendOrder(order);
            alert(`Orden enviada con ID: ${orderId}. Gracias por tu compra :)`);
            navigate('/');
        } catch (error) {
            console.error("Error al enviar la orden:", error);
            alert("Hubo un problema al enviar la orden. Inténtalo de nuevo.");
        }
        
    };
    
    return (
<>
        <Navbar/>
        <Banner/>
        <div className="container mt-5">
            <h2 className="text-center mb-4">Finalizar Compra</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-group">
                            <label htmlFor="name">Nombre:</label>
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
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
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
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono:</label>
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
                        <button type="submit" className="btn btn-primary btn-block">Enviar Orden
                           
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default CheckoutForm;