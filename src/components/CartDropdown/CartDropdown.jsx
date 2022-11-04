import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownContext } from "../../contexts/cartDropdown.context";
import CartItem from "../Cart Items/CartItem";
const CartDropdown = () => {
  const { cartItems } = useContext(DropdownContext);
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/checkout");
  };

  return (
    <div
      className="border  border-neutral-900 h-72 w-64 p-1 absolute  xs:right-5 xs:top-16  sm:right-10 sm:top-64  gap-6  overflow-y-scroll 
      bg-neutral-50 md:right-5 md:top-14  flex flex-col  items-center"
    >
      <div className=" flex flex-col gap-1 my-3 ">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>

      <div className="">
        <button
          onClick={navigateHandler}
          className=" py-2 px-4 mb-5 border bg-stone-800 text-base text-neutral-300 hover:bg-stone-100 
       hover:border-stone-800 hover:text-stone-800 duration-300 ease-in"
        >
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
