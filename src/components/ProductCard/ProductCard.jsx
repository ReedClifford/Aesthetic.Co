import { useContext } from "react";
import { DropdownContext } from "../../contexts/cartDropdown.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(DropdownContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="p-2 shadow-lg shadow-neutral-200   h-fit ">
      <div className="relative inset-0 h-80 w-full flex flex-col  justify-around items-center">
        <img
          src={imageUrl}
          alt={`${name}`}
          className="object-cover  object-center absolute inset-0 h-full w-full "
        />
        <button
          className=" text-neutral-200 font-base mt-60 backdrop-blur-sm bg-black/5 border rounded-sm py-2 px-4 
          hover:bg-black/80  hover:shadow-md hover:shadow-neutral-600 hover:text-neutral-50 hover:border-black
          hover:duration-500 hover:ease-in-out"
          onClick={addProductToCart}
        >
          Add to Cart
        </button>
      </div>

      <div className=" flex justify-between items-center p-5">
        <span className="font-semibold">{name}</span>
        <span>PHP {price}</span>
      </div>
    </div>
  );
};
export default ProductCard;
