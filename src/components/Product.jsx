import { useNavigate } from "react-router-dom"

export const Product = ({handler, id, image, name, description, price}) => {

    const navigate = useNavigate();

    const onAddProduct =(product)=>{
        handler(product)
        navigate('/cart')
    }

    return(
        <>
            <div className="card">
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <button 
                    className="btn btn-primary btn-sm"
                    onClick= { ()=> onAddProduct({id, name, description, price}) }
                    >Add to Cart</button>
                </div>
            </div>
        </>
    )
}