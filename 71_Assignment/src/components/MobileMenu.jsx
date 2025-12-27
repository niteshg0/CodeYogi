import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { BsBag } from "react-icons/bs";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const { count } = useContext(CartContext);
  return (
    <>
     <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    <div className="fixed bg-gray-100 p-4 w-[70%]  z-50 top-0 bottom-0 right-0 overflow-auto flex flex-col">
      <div className="flex justify-end pb-2 border-b-2 border-gray-300">
        <button className="text-2xl font-medium text-primary-extradark" onClick={() => setIsOpen(!isOpen)}
            aria-label="Close Menu">
          X
        </button>
      </div>

      <ul
        className="flex flex-col gap-6 mt-6 ml-2 text-primary-extradark font-medium "
        onClick={() => setIsOpen(!isOpen)}
      >
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link className="relative text-4xl md:text-4xl" to={"/cart"}>
            <BsBag className="text-primary-dark " />
            {count > 0 && (
              <span className="absolute  bottom-1 left-2 rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </div>
    </>
  );
};
export default MobileMenu;
