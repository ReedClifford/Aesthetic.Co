import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownContext } from "../../contexts/cartDropdown.context";
import { UserContext } from "../../contexts/user.context";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { name, imageUrl, price } = product;

  const { currentUser } = useContext(UserContext);
  const { addItemToCart } = useContext(DropdownContext);
  const addProductToCart = () => {
    !currentUser ? navigate("/signIn") : addItemToCart(product);
  };

  return (
    <div className="p-2 shadow-md shadow-neutral-200  border border-neutral-300  h-fit backdrop-blur-sm bg-white/90 hover:scale-105 duration-300 ease-in-out">
      <div className="relative inset-0 h-80 w-full flex flex-col  justify-around items-center ">
        <img
          src={imageUrl}
          alt={`${name}`}
          className="object-cover  object-center absolute inset-0 h-full w-full "
        />
        <span className=" text-neutral-800 font-medium mt-60 backdrop-blur-sm bg-white/50 shadow-sm shadow-neutral-900 rounded-sm py-2 px-4 ">
          ₱ {price}
        </span>
      </div>

      <div className=" flex  flex-col items-center p-5">
        <span className="font-semibold">{name}</span>

        <button
          className=" text-neutral-200 font-base rounded-sm   bg-neutral-700 border  py-2 px-4 
        hover:bg-neutral-900  hover:shadow-sm hover:shadow-neutral-900 hover:text-neutral-50 hover:border-neutral-900
        hover:duration-500 hover:ease-in-out"
          onClick={addProductToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
