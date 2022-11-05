import { Fragment, useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoriesContext } from "../../contexts/categories.contexts";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const shopData = Object.keys(categoriesMap).map((title) => {
    return categoriesMap[title].map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });
  });

  return (
    <Fragment>
      <div className="container mx-auto mt-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {shopData}
        </div>
      </div>
    </Fragment>
  );
};
export default Shop;
