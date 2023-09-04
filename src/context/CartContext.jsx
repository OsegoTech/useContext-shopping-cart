import { createContext } from "react";

const CartContext = createContext();  // Create a context object

export const CartProvider = CartContext.Provider;  // Create a provider component


export default CartContext;  // Export the context object