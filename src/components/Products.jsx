import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";

export default function Products({ addToCart }) {
  const navigate = useNavigate();
  const products = useContext(ProductsContext);

  if (!products.length) {
    return (
      <div>
        <p>No products available</p>
        <button onClick={() => navigate("/add-product")}>Add Product</button>
      </div>
    );
  }

  return (
    <ul className="list-group">
      {products.map((product) => (
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
                <div className="product-button">
                    <button className="btn btn-sm btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>
          </div>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
}
