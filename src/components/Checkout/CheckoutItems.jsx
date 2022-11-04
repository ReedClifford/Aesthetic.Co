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
                  className="px-2 border cursor-pointer"
                  onClick={() => addItemToCart(cartItem)}
                >
                  {`<`}
                </div>
                <span className="font-extrabold px-2">{quantity}</span>
                <div
                  className="px-2 border cursor-pointer"
                  onClick={() => removeItemtoCart(cartItem)}
                >{`>`}</div>
              </div>
              <span>{price}</span>
              <button
                onClick={() => clearItemFromCart(cartItem)}
                className="bg-red-600 text-neutral-100 font-medium 
                px-4 py-2 rounded-md hover:bg-neutral-900 duration-500 ease-in-out"
              >
                remove
              </button>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
export default CheckoutItems;
