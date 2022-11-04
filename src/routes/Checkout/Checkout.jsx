import { useContext } from "react";
import CheckoutItems from "../../components/Checkout/CheckoutItems";
import { DropdownContext } from "../../contexts/cartDropdown.context";
const Checkout = () => {
  const { totalValue } = useContext(DropdownContext);
  return (
    <section className=" mx-auto mt-10 flex flex-col gap-2 md:container">
      Checkout
      <CheckoutItems />
      <h1 className="text-5xl">Total value: ₱{totalValue} </h1>
    </section>
  );
};

export default Checkout;
