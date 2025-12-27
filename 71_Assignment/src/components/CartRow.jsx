import { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

  const CartRow = ({item, qty, localCart, setLocalCart}) => {
  
  const {handleRemoveFromCart} = useContext(CartContext);

  return (
    <tr className="odd:bg-white even:bg-gray-100 border-t border-gray-300 align-middle hover:underline" >
      <td className="text-2xl md:px-4 ">
        <MdOutlineCancel onClick={() => handleRemoveFromCart(item.id)} />
      </td>
      <td className="py-2">
        <span className="flex justify-start items-center gap-4">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-15 h-15 object-cover object-center"
          />
          <Link to={`/prod-detail/${item.id}`}><p className="text-red-500 text-wrap font-medium">{item.title}</p></Link>
        </span>
      </td>
      <td className="p-2">${item.price}</td>
      <td className="p-2">
        <input
          type="number"
          value={localCart[item.id]}
          onChange={(e) => setLocalCart((prev) => ({ ...prev, [item.id]: +e.target.value }))}
          className="text-center w-16 border border-gray-300 p-2"
        />
      </td>
      <td className="p-2 font-bold">${qty * item.price}</td>
    </tr>
  );
};
export default CartRow;
