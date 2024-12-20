import './CartContent.css';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import { Link } from 'react-router-dom';

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
        <div>
            {cart.map((prod) => {
                return (
                    <div className='product-card-container' key={prod.id}>
                        <img src={prod.image} alt="product-card" />
                        <h5>{prod.title}</h5>
                        <h5>Cantidad: {prod.quantity}</h5>
                        <h5>💰 Precio unitario ${prod.price}</h5>
                        <h5>💰 Sub Total: ${prod.price * prod.quantity}</h5>
                        <h3 className='cart-delete-product' onClick={() => deleteProducts(prod.id)}>
                            ❌
                        </h3>
                    </div>
                );
            })}
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '10vh' }}>
                <button className="btn btn-danger mb-3" onClick={clearCart}>
                    Vaciar Carrito
                </button>
                <Link to="/checkout" className="btn btn-success">
                    Finalizar Compra
                </Link>
            </div>
        </div>
    );
};

export default CartElements;