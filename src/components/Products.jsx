import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { Product } from "./Product";

export const Products = ( { handler }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(getProducts());
    }, []);
    return(        
        <>
            <div className="row text-center">
                {products.map ( p =>(
                    <div className="col-4 my-4"key={p.id}>
                        <Product 
                            handler={ handler }
                            id={ p.id }
                            image={ p.image }
                            name={ p.name }
                            description={ p.description }
                            price={ p.price }
                        />
                    </div>
                ))}
            </div>
        </>
    )
}