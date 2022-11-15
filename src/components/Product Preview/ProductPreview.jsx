import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
const ProductPreview = ({ title, items }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-neutral-600 my-10 hover:text-neutral-900 duration-300 ease-in-out">
        <Link to={`${title}`}>
          <span>{title.toUpperCase()}</span>
        </Link>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {items
          .filter((_, idx) => idx < 3)
          .map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default ProductPreview;
