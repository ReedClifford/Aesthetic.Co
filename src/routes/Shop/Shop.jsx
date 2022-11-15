import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../../components/Category Preview/CategoryPreview";
import ItemCategory from "../Item Categories/ItemCategory";

const Shop = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<CategoryPreview />} />
        <Route path=":category" element={<ItemCategory />} />
      </Routes>
    </Fragment>
  );
};
export default Shop;
