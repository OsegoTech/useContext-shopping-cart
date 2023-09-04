import { useContext } from "react";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart({addToCart, removeFromCart}) {
    const cart = useContext(CartContext);
    const navigate = useNavigate();

    if (!cart.length) {
        return (
            <div>
                <p>Your cart is empty</p>
                <button onClick={() => navigate("/")}>Add Product</button>
            </div>
        );
    }
    return(
       <ul className="list-group">
              {cart.map((product) => (
                <li key={product.id} className="list-group-item">
                     <div className="product">
                          <div className="product-left">
                            <div className="product-image">
                                 <img src={product.url} alt={product.name} />
                            </div>
                            <div className="product-title">{product.name}</div>
                            <div className="product-description">{product.description}</div>
                          </div>
                          <div className="product-right">
                            <div className="product-price">{product.price}</div>
                            <div className="product-controls">
                                 <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(product)}>-</button>
                                    <span className="product-quantity">{product.quantity}</span>
                                    <button className="btn btn-sm btn-success" onClick={() => addToCart(product)}>+</button>
                            </div>
                          </div>
                     </div>
                </li>
              ))}
       </ul>
    )
}