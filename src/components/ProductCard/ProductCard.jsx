const ProductCard = ({ id, name, imageUrl, price }) => {
  return (
    <div key={id} className="p-2 shadow-md w-fit h-full">
      <img
        src={imageUrl}
        alt={name}
        className="object-cover object-center w-64 "
      />
      <div className="flex justify-between items-center p-5">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <button className="py-2 px-4 border rounded-sm">Add to Cart</button>
    </div>
  );
};
export default ProductCard;
