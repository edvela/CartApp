import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []

export const useItemsCart = () => {

    const [cart, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const handlerAddProductCart = (product) => {

        const hasItem = cart.find((i) => i.product.id === product.id);

        if (hasItem) {
            dispatch({
                type: 'updateProductCart',
                payload: product
            })
        } else {
            dispatch({
                type: 'addProductCart',
                payload: product
            })
        }
    }

    const handlerDeleteProductCart = (id) => {
        dispatch({
            type: 'deleteProductCart',
            payload: id
        })
    };


    return {
        cart,
        handlerAddProductCart,
        handlerDeleteProductCart

    }
}