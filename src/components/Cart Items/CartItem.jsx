const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <div className="flex justify-between items-center gap-2   border p-3 ">
      <div>
        <img src={imageUrl} alt={`${name}`} className="w-16" />
      </div>
      <div className="flex flex-col text-end">
        <h2 className="font-semibold">{name}</h2>
        <span>
          {quantity} x ₱{price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
