import { useEffect, useState } from "react";
import { fetchProduct } from "../api";
import CartRow from "./CartRow";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import Loading from "./Loading";
import Error from "./Error";
import Button from "./Button";

const CartList = ({ setTotal }) => {
  const { cart, setCart, loading, setLoading } = useContext(CartContext);
  const [cartList, setCartList] = useState([]);
  const [error, setError] = useState(false);
  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    setLoading(true);
    const products = Object.keys(cart).map((id) => {
      return fetchProduct(+id);
    });

    Promise.all(products)
      .then((items) => setCartList(items))
      .catch(() => setError(true))
      .finally(() => setLoading(false));

    setLocalCart(cart);
  }, [cart]);

  useEffect(() => {
    let totalPrice = 0;
    if (cartList) {
      cartList.forEach((item) => {
        totalPrice += item.price * cart[item.id];
      });
    }

    setTotal(totalPrice);
  }, [cartList]);

  if (error) {
    return <Error msg="Unable to fetch All Product of Cart" />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full lg:w-[85%]">
      <div className=" overflow-x-auto">
        <table className="border border-gray-300   md:table-auto w-full text-center overflow-x-auto min-w-[600px]">
          <thead className="text-lg font-semibold text-gray-600 bg-gray-300">
            <tr>
              <th></th>
              <th className=" py-2">Product</th>
              <th className=" py-2">Price</th>
              <th className=" py-2">Quantity</th>
              <th className=" py-2">SubTotal</th>
            </tr>
          </thead>
          <tbody className="font-medium text-gray-500">
            {cartList.length > 0 ? (
              cartList.map((item) => (
                <CartRow
                  key={item.id}
                  item={item}
                  qty={cart[item.id]}
                  setLocalCart={setLocalCart}
                  localCart={localCart}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-primary-dark p-4">
                  Your cart is empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* <div className="md:hidden space-y-4 mt-4">
        {CartItems.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded p-4 relative"
          >
            <button className="absolute top-2 right-2 text-2xl text-gray-400">
              <MdOutlineCancel />
            </button>

            <div className="flex gap-4 mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <p className="text-red-500 font-medium mb-2">{item.title}</p>
                <p className="text-gray-600">
                  Price: <span className="font-bold">${item.price}</span>
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <label className="text-gray-600">Qty:</label>
                <input
                  type="number"
                  value={1}
                  className="w-16 border border-gray-300 p-2 text-center rounded"
                />
              </div>
              <div className="text-right">
                <p className="text-gray-600 text-sm">Subtotal</p>
                <p className="font-bold text-lg">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="flex  justify-between items-center mt-4 gap-4 flex-col md:flex-row">
        <div className="flex  gap-2">
          <input
            type="text"
            placeholder="Coupon code"
            className="border border-gray-300 p-3 rounded flex max-w-50"
          />
          <Button className="bg-primary-dark">APPLY COUPON</Button>
        </div>
        <Button className="bg-primary-dark" onClick={() => setCart(localCart)} disabled={loading}>UPDATE CART</Button>
      </div>
    </div>
  );
};
export default CartList;
