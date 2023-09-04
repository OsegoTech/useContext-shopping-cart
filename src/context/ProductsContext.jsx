import { createContext } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ProductsContext.Provider;

export default ProductsContext;