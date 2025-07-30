import React, { useState, useEffect } from 'react';
import { CartView } from './components/CartView';
import { Products } from './components/Products';
import { Message } from './components/Message';


const cartModel = JSON.parse(sessionStorage.getItem('cart')) || []

export const CartApp = () => {
    
    const [cart, setCart]  = useState(cartModel);

    const handlerAddProductCart = (product) => {

        const hasItem = cart.find((i) => i.product.id === product.id);
        
        if(hasItem){
            setCart(
                cart.map( (i) => {
                    if(i.product.id=== product.id){
                        i.quantity = i.quantity+1
                    }
                    return i
                })
            )
        } else {
            setCart([
                ...cart, 
                {
                    product,
                    quantity: 1,
                    total: product.price*1
                }
            ])
        }    
    }

    const handlerDeleteProductCart = (id) => {
        console.log("Trigered!!!")
        setCart([
            ...cart.filter((i)=>i.product.id !== id)
        ])
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
