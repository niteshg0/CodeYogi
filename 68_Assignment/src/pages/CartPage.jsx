import { useState } from "react";
import CartList from "../components/CartList";

const CartPage = ({cart}) => {


const [total, setTotal] = useState(0);

  return (
    <div className="flex flex-col grow bg-gray-200 py-10 px-6">
      <div className="flex flex-col items-center justify-center grow bg-white md:px-10 lg:px-30 p-1">
        <CartList  cart={cart} setTotal={setTotal} />

        <div className="flex justify-center items-center md:justify-end ">
          <div className=" text-gray-500 font-medium flex flex-col w-100 ">
            <h1 className=" p-4 text-lg bg-gray-200 mt-4">Cart Totals</h1>

            <div className="p-4 flex flex-col gap-4 border border-gray-200  mb-4">
              <div className="flex justify-evenly border-b border-gray-200 pb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-evenly">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="bg-red-500 text-white text-lg  py-2 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
