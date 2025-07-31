import { useItemsCart } from './hooks/useItemsCart';
import { Navbar } from './components/Navbar';
import { CartRoutes } from './routes/CartRoutes';

export const CartApp = () => {

    const { cart, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            <Navbar />
            <div className="container my-4">
                <CartRoutes 
                    cart={cart}
                    handlerAddProductCart = {handlerAddProductCart}
                    handlerDeleteProductCart = {handlerDeleteProductCart}
                />
            </div>

        </>
    );
}
