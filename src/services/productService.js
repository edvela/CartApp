import {products} from "../data/products"
export const getProductsAPI = () => {
    return fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => data.map(product => ({
            id: product.id,
            name: product.title,
            description: product.description,
            price: product.price,
            image: product.image
        })));
}

export const getProducts = () => {
    return products;
}

export const calculateTotal = (items) => {
    items.reduce((accumulator, item) => accumulator + item.product.price * item.quantity , 0)
}