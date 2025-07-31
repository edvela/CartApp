import { Navigate, Route, Routes } from "react-router-dom"
import { Products } from "../components/Products"
import { CartView } from "../components/CartView"
import { Message } from "../components/Message"

export const CartRoutes = ({ cart, handlerAddProductCart, handlerDeleteProductCart}) => {
    return (
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
    )
}