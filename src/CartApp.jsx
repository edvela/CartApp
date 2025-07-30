import { CartView } from './components/CartView';
import { Products } from './components/Products';
import { Message } from './components/Message';
import { useItemsCart } from './hooks/useItemsCart';

export const CartApp = () => {
    
const { cart, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>        

    
            <div className="container">
                <Products handler={ product => handlerAddProductCart(product) } />
            </div>
            
            <div className="container">
                {cart?.length > 0 ? (
                    <CartView items={ cart } handlerDelete={handlerDeleteProductCart} />
                ) : (<Message text="No items yet" alertType="warning"/>)}
            </div>
            
        </>
    );
}
