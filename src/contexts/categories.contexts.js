import { createContext, useEffect, useState } from "react";
// import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utls/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const values = { categoriesMap };

  return (
    <CategoriesContext.Provider value={values}>
      {children}
    </CategoriesContext.Provider>
  );
};
