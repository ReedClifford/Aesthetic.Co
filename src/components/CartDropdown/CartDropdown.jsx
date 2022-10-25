const CardDropdown = () => {
  return (
    <div
      className="border border-neutral-900 h-72 p-5 absolute right-0 top-16
    md:right-5 md:top-14 bg-neutral-50 flex flex-col justify-end"
    >
      <button className="py-2 px-4 bg-stone-800 text-neutral-300 hover:bg-stone-900 duration-300 ease-in">
        Go To Checkout
      </button>
    </div>
  );
};

export default CardDropdown;
