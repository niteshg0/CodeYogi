import CartList from "../components/CartList.jsx";

const CartPage = () => {
  return (
    <div className="flex flex-col grow bg-gray-200 py-10 px-6">
      <div className="w-90vh flex flex-col items-center justify-center grow bg-white">
        <CartList />

        <div className="flex justify-center items-center md:justify-end w-250">
          <div className=" text-gray-500 font-medium flex flex-col w-100 ">

          <h1 className=" p-4 text-lg bg-gray-200 mt-4">Cart Totals</h1>


          <div className="p-4 flex flex-col gap-4 border border-gray-200  mb-4">
            <div className="flex justify-evenly border-b border-gray-200 pb-2">
              <span>Subtotal</span>
              <span>$100.00</span>
            </div>
            <div className="flex justify-evenly">
              <span>Subtotal</span>
              <span>$100.00</span>
            </div>

            <button className="bg-red-500 text-white text-lg w-full py-2 rounded">Proceed to Checkout</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
