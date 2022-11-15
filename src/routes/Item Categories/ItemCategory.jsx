import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoriesContext } from "../../contexts/categories.contexts";

const ItemCategory = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="container mx-auto my-16">
      <h1 className="text-center font-semibold text-3xl text-neutral-700 my-10">
        {category.toUpperCase()}
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {items
          ? items.map((item) => <ProductCard key={item.id} product={item} />)
          : null}
      </div>
    </div>
  );
};

export default ItemCategory;
