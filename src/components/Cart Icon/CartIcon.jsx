import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/cartDropdown.context";
const CartIcon = () => {
  const { isActive, setIsActive, cartCount } = useContext(DropdownContext);
  const onClickHandler = () => setIsActive(!isActive);

  return (
    <div
      className="flex gap-5 items-center px-4  py-1  w-fit bg-neutral-700 rounded-full
     hover:cursor-pointer hover:bg-neutral-900 hover:ease-in-out duration-300"
      onClick={onClickHandler}
    >
      <FontAwesomeIcon
        icon={faCartShopping}
        className="  text-zinc-300 rounded-full"
      ></FontAwesomeIcon>

      <span className="text-white ">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
