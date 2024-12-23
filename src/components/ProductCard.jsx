import { useContext } from "react";

import { MinicartContext } from "../hooks/useMinicart";

import "./ProductCard.css"

function ProductCard({ product }) {
    const { addToCart } = useContext(MinicartContext)

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
    );
}

export default ProductCard;