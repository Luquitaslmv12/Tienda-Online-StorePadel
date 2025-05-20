import { useContext } from 'react';
import { Context } from '../../Context/Context';


const CartWidget = () => {
    const {cart, setCart} = useContext(Context)

    const totalUnits = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    return (
        <div className="cart-widget">
            <img src="../../../public/carrito-de-compras.png" alt="Carrito" />
            {totalUnits > 0 && <span className="cart-count">{totalUnits}</span>}
        </div>
    );
};

export default CartWidget;

