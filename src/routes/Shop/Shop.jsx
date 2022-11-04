import { Fragment, useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductContext } from "../../contexts/products.context";
const Shop = () => {
  const { products } = useContext(ProductContext);
  const shopData = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <Fragment>
      <div className="container mx-auto mt-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {shopData}
        </div>
      </div>
    </Fragment>
  );
};
export default Shop;
