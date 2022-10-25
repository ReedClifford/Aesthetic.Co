import { Fragment, useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductContext } from "../../contexts/products.context";
const Shop = () => {
  const { products } = useContext(ProductContext);
  const shopData = products.map(({ id, name, imageUrl, price }) => {
    return (
      <ProductCard
        key={id}
        id={id}
        name={name}
        imageUrl={imageUrl}
        price={price}
      />
    );
  });

  return (
    <Fragment>
      <div className="container mx-auto mt-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {shopData}
        </div>
      </div>
    </Fragment>
  );
};
export default Shop;
