import { useContext } from "react";
import CheckoutItems from "../../components/Checkout/CheckoutItems";
import { DropdownContext } from "../../contexts/cartDropdown.context";
const Checkout = () => {
  const { totalValue } = useContext(DropdownContext);
  return (
    <section className=" mx-auto mt-10 flex flex-col gap-2 md:container">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <hr className="mb-10" />
      <CheckoutItems />
      <h1 className="text-3xl text-end">Total value: ${totalValue} </h1>
    </section>
  );
};

export default Checkout;
