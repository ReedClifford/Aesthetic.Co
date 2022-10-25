import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/cartDropdown.context";
const CartIcon = () => {
  const { isActive, setIsActive } = useContext(DropdownContext);
  const onClickHandler = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };
  return (
    <div
      className="flex gap-5 items-center px-4 relative  w-fit bg-neutral-700 rounded-full
     hover:cursor-pointer hover:bg-neutral-900 hover:ease-in-out duration-300"
      onClick={onClickHandler}
    >
      <FontAwesomeIcon
        icon={faCartShopping}
        className="  text-zinc-300 rounded-full"
      ></FontAwesomeIcon>

      <span className="text-white ">0</span>
    </div>
  );
};

export default CartIcon;
