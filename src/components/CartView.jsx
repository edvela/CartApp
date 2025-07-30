import React, { useEffect, useState } from "react";


export const CartView = ({ items, handlerDelete }) => {

    const [total, setTotal] = useState(0);

    useEffect(()=>{
        setTotal(
            items.reduce((accumulator, item) => accumulator + item.product.price * item.quantity , 0)
        );
    }, [items])

    const onDeleteProduct = (id) => {
        handlerDelete(id)
    }

    return(
        <>
            <div className="my-4 w-50">
                <h1>Shopping Cart</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {                             
                            items.map( item=> (
                            <tr key={ item.product.id}>
                                <td>{ item.product.name}</td>
                                <td>{ item.product.price}</td>
                                <td>{ item.quantity}</td>
                                <td>${item.quantity * item.product.price}</td>
                                <td>
                                    <button 
                                    className="btn btn-danger btn-sm"
                                    onClick={()=>onDeleteProduct(item.product.id)}
                                    >Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="fw-bold">
                            <td colSpan="3" className="text-end">Total</td>
                            <td>${total}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>        
        </>

    );
}