import { Fragment, useContext } from "react";

import ProductPreview from "../../components/Product Preview/ProductPreview";
import { CategoriesContext } from "../../contexts/categories.contexts";
const CategoryPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      <div className="container mx-auto mt-16">
        {Object.keys(categoriesMap).map((title) => {
          const items = categoriesMap[title];
          return <ProductPreview key={title} items={items} title={title} />;
        })}
      </div>
    </Fragment>
  );
};
export default CategoryPreview;
