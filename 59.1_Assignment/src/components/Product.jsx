const Product = ({ title, category, price, img, sale=false }) => {
  return (
    <div className="h-100 relative max-w-70  md:max-w-80  ">
      <img src={img} alt={title} className="h-60 w-full object-cover" />
      <div className="flex flex-col gap-1 p-2 pl-0">
        <h1 className="text-gray-500">{category}</h1>
        <h1 className="font-medium  whitespace-nowrap overflow-hidden text-ellipsis">{title}</h1>
        <p>⭐⭐⭐⭐⭐</p>
        <p>${price}</p>
        {sale && <p className=" bg-red-500 p-3 rounded-full font-bold  absolute -top-2 -right-2">Sale</p>}
      </div>
    </div>
  );
};
export default Product;
