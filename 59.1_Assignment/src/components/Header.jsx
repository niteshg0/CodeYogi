import { Link } from "react-router-dom"
import { FaCartPlus } from "react-icons/fa";

const Header = () => {

  return (
    <header className="w-full  bg-amber-200 flex justify-between items-center px-4 py-2">
        <Link to={"/"}>
        <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png" alt="Amazon"
        className="w-26 " />
        </Link>

        <Link to={"/cart"} className="text-4xl mr-4"><FaCartPlus /></Link>
    </header>
  )
}
export default Header