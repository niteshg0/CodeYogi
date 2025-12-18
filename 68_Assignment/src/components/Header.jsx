import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const Header = ({ count }) => {
  return (
    <header className="w-full  bg-amber-200 flex justify-between items-center px-4 py-2">
      <div>
        <Link to={"/"}>
          <img
            src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png"
            alt="Amazon"
            className="w-15 md:w-26 "
          />
        </Link>
      </div>

      

      <ul className="flex items-center gap-6 text md:text-lg font-medium">
        <li><Link to={"/login"}>Login</Link></li>
        <li><Link to={"/register"}>Register</Link></li>
        <li>
          <Link className="relative text-2xl md:text-4xl" to={"/cart"}>
          <BsBag className="text-primary-dark " />
          {count > 0 && (
            <span className="absolute top-[50%] left-[50%] rounded-full bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center">
              {count}
            </span>
          )}</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
