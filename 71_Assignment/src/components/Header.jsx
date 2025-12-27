import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const {count} = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  

  return (
    <header className="w-full  bg-primary-light flex justify-between items-center px-4 py-2">
      
      <div className="">
        <Link to={"/"}>
          <img
            src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png"
            alt="Amazon"
            className="w-15 md:w-26 "
          />
        </Link>
      </div>

      <div className="sm:hidden">
         <IoMenu className="text-3xl cursor-pointer"
         onClick={()=> setIsOpen(!isOpen)}/>
      </div>

      {isOpen && (<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />)}

      <ul className="hidden sm:flex text-primary-extradark items-center gap-6 text md:text-lg font-medium">
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link className="relative text-2xl md:text-4xl" to={"/cart"}>
            <BsBag className="text-primary-dark " />
            {count > 0 && (
              <span className="absolute top-[50%] left-[50%] rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
