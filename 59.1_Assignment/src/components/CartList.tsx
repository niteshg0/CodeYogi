import { MdOutlineCancel } from "react-icons/md";

const CartItems = [
  {
    id: 1,
    title: "Black Printed Coffee Mug",
    category: "Mugs",
    price: 12.99,
    sale: false,
    img: "https://plus.unsplash.com/premium_photo-1718234942375-4fcef6828891?w=600&auto=format&fit=crop&q=60",
  },

  {
    id: 2,
    title: "Father Black Printed Coffee Mug",
    category: "Mugs",
    price: 12.99,
    sale: true,
    img: "https://images.unsplash.com/photo-1626881503617-34b52868cd7f?w=600&auto=format&fit=crop&q=60",
  },
];

const CartList = ({}) => {
  return (
    <div className=" md:w-[100vh]">
      <div className="hidden md:block overflow-x-auto">
        <table className="border border-gray-300 w-full">
          <thead className="text-lg font-semibold text-gray-600 bg-gray-100">
            <tr>
              <th></th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">SubTotal</th>
            </tr>
          </thead>
          <tbody className="font-medium text-gray-500">
            {CartItems.map((item, idx) => (
              <tr className="border-t border-gray-300" key={idx}>
                <td className="text-2xl px-4">
                  <MdOutlineCancel />
                </td>
                <td className="p-2">
                  <div className="flex justify-start items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-15 h-15 object-cover object-center"
                    />
                    <p className="text-red-500 text-wrap font-medium">
                      {item.title}
                    </p>
                  </div>
                </td>
                <td className="p-2">${item.price}</td>
                <td className="p-2">
                  <input
                    type="number"
                    value={1}
                    className="text-center w-16 border border-gray-300 p-2"
                  />
                </td>
                <td className="p-2 font-bold">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="md:hidden space-y-4 mt-4">
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
      </div>


      <div className="flex flex-col sm:flex-row gap-2 mt-8">
        <input
          type="text"
          placeholder="Coupon code"
          className="border border-gray-300 p-3 rounded flex-1"
        />
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
