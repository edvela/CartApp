import { CartView } from './components/CartView';
import { Products } from './components/Products';
import { Message } from './components/Message';
import { useItemsCart } from './hooks/useItemsCart';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';

export const CartApp = () => {

    const { cart, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            <Navbar />
            <div className="container my-4">
                <Routes>
                    <Route
                        path="catalog"
                        element={<Products handler={product => handlerAddProductCart(product)} />}
                    />
                    <Route
                        path="cart" element={(
                            cart?.length > 0 ? (
                                <CartView items={cart} handlerDelete={handlerDeleteProductCart} />
                            ) : (<Message text="No items yet" alertType="warning" />)
                        )}
                    />
                    <Route path="/" element={<Navigate to="/catalog" />} />
                </Routes>
            </div>

        </>
    );
}
