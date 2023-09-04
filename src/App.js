import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { useLocalStorage } from "./util";

function App() {
  const [cart, setCart] = useLocalStorage("cart",[]);
  const [products, setProducts] = useLocalStorage("products",[]);

  const addProduct = (product) => {
    product.id = products.length + 1;
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const addToCart = (product) => {
    if (cart.length) {
      const newCart = [...cart];
      let foundIndex = newCart.findIndex((item) => item.id === product.id);

      if (foundIndex >= 0) {
        newCart[foundIndex].quantity += 1;
        setCart(newCart);
      } else {
        product.quantity = 1;
        newCart.push(product);
        setCart(newCart);
      } 
    } else {
      product.quantity = 1;
      const newCart = [ product];
      setCart(newCart);
    }
  };

  const removeFromCart = (product) => {
    const newCart = [...cart];
    let foundIndex = newCart.findIndex((item) => item.id === product.id);
    newCart[foundIndex].quantity -= 1;

    if (newCart[foundIndex].quantity === 0) {
      newCart.splice(foundIndex, 1);
    }
    setCart(newCart);
  };
  return (
    <div>
      <CartProvider value={cart}>
        <ProductsProvider value={products}>
          <Header />
          <Routes>
            <Route path="/" element={<Products addToCart={addToCart}/>} />
            <Route path="/cart" element={<Cart />} addToCart={addToCart} removeFromCart={removeFromCart}/>
            <Route
              path="/add-product"
              element={<AddProduct />}
              addProduct={addProduct}
            />
          </Routes>
        </ProductsProvider>
      </CartProvider>
    </div>
  );
}

export default App;
