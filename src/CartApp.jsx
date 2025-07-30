import React, { useState, useEffect, useReducer } from 'react';
import { CartView } from './components/CartView';
import { Products } from './components/Products';
import { Message } from './components/Message';
import { itemsReducer } from './reducer/itemsReducer';


const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []

export const CartApp = () => {
    
    const [cart, dispatch] = useReducer(itemsReducer, initialCartItems );

    useEffect(()=>{
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const handlerAddProductCart = (product) => {

        const hasItem = cart.find((i) => i.product.id === product.id);
        
        if(hasItem){
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
