import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useContext } from "react";
import { DropdownContext } from "../../contexts/cartDropdown.context";

const CheckoutItems = () => {
  const { cartItems, addItemToCart, removeItemtoCart, clearItemFromCart } =
    useContext(DropdownContext);

  return (
    <Fragment>
      {cartItems.map((cartItem) => {
        const { quantity, id, name, imageUrl, price } = cartItem;
        return (
          <div
            key={id}
            className="shadow-md shadow-neutral-200 p-2 grid grid-cols-5 text-start min-w-fit text"
          >
            <div className="col-span-2 ">
              <img src={imageUrl} alt={name} className="w-60" />
            </div>
            <div className=" col-span-3 p-4 w-fit  flex justify-between gap-3 items-center md:w-full">
              <h1>{name}</h1>
              <div className="flex">
                <div
                  className=" px-2 border  cursor-pointer text-center flex justify-center items-center"
                  onClick={() => addItemToCart(cartItem)}
                >
                  {`+`}
                </div>
                <span className="font-bold px-2 border bg-neutral-100">
                  {quantity}
                </span>
                <div
                  className="  px-2 border  cursor-pointer text-center flex justify-center items-center"
                  onClick={() => removeItemtoCart(cartItem)}
                >{`-`}</div>
              </div>
              <span>${price}</span>
              <button
                onClick={() => clearItemFromCart(cartItem)}
                className=" text-neutral-700  border border-white
                px-4 py-2 rounded-md hover:border-slate-900 hover:text-black duration-500 ease-in-out"
              >
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
export default CheckoutItems;
