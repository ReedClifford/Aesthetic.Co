import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({
  product: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(PRODUCTS);
  const values = { products };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
