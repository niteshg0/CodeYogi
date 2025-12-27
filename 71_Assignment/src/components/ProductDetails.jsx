import { memo, useState } from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import Button from "./Button";

const ProductDetails = ({id, images, title, price, description}) => {

  const {handleCartUpdate} = useContext(CartContext);

  const [count, setCount] = useState(1);

  return (
    <div className="w-full flex flex-col justify-center sm:w-[90%] mx-auto sm:h-180 sm:flex-row px-4 sm:px-15 py-10 mb-10  gap-18 bg-white">
      <img
        src={images}
        alt={title}
        className="w-50 self-center sm:w-[50%] object-cover object-center"
      />

      <div className="flex flex-col gap-2 sm:gap-7">
        <h1 className="text-lg sm:text-4xl font-semibold">{title}</h1>
        <p className="text-gray-600 text-lg sm:text-3xl font-semibold">${price}</p>
        <p className="text-gray-600 text-sm sm:text-2xl">
          {description}
        </p>

        <div className="flex justify-start gap-4 pt-4">
          <input
            type="number"
            value={count}
            min={1}
            onChange={(e) => setCount(+e.target.value)}
            className="w-15 border border-gray-300 text-center text-lg"
          />
          {/* <button className="bg-orange-600 text-white py-2 px-6 w-45 rounded  text-lg" onClick={() => handleCartUpdate(id, count)}>
            Add to Cart
          </button> */}

          <Button onClick={() => handleCartUpdate(id, count)} className="bg-primary-dark">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

const memoProductDetails = memo(ProductDetails);

export default memoProductDetails;
