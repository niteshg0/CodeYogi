import { useEffect, useState } from "react";
import { fetchProduct } from "../api";
import CartRow from "./CartRow";

// const CartItems = [
//   {
//     id: 1,
//     title: "Black Printed Coffee Mug",
//     category: "Mugs",
//     price: 12.99,
//     sale: false,
//     img: "https://plus.unsplash.com/premium_photo-1718234942375-4fcef6828891?w=600&auto=format&fit=crop&q=60",
//   },

//   {
//     id: 2,
//     title: "Father Black Printed Coffee Mug",
//     category: "Mugs",
//     price: 12.99,
//     sale: true,
//     img: "https://images.unsplash.com/photo-1626881503617-34b52868cd7f?w=600&auto=format&fit=crop&q=60",
//   },
// ];

const CartList = ({ cart, setTotal }) => {
  const [cartList, setCartList] = useState(null);

  useEffect(() => {
    const products = Object.keys(cart).map((id) => {
      return fetchProduct(+id);
    });

    Promise.all(products).then((items) => setCartList(items));
    
  }, [cart]);

  useEffect(()=>{
    let totalPrice = 0;
    if(cartList){
      cartList.forEach((item)=>{
        totalPrice += item.price * cart[item.id];
      })
    }

    setTotal(totalPrice);
  }, [cartList])

  // console.log(cartList);
  

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
            {cartList && cartList.map((item) => (
              <CartRow key={item.id} item={item} qty={cart[item.id]} />
            ))}
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

      <div className="flex flex-col sm:flex-row gap-2 mt-8">
        {/* <input
          type="text"
          placeholder="Coupon code"
          className="border border-gray-300 p-3 rounded flex-1"
        /> */}
        <button className="bg-red-500 rounded text-white px-6 py-3 whitespace-nowrap">
          APPLY COUPON
        </button>
        <button className="bg-red-300 rounded text-white px-6 py-3 sm:ml-auto whitespace-nowrap">
          UPDATE CART
        </button>
      </div>
    </div>
  );
};
export default CartList;
