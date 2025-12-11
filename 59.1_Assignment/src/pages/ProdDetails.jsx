import { Link } from "react-router-dom";
import ProductDetails from "../components/ProductDetails"
import { IoMdArrowRoundBack } from "react-icons/io";


const ProdDetails = () => {
  return (
    <div className="flex flex-col grow bg-gray-300 items-center justify-center ">
        <div className="self-start ml-20">
          <Link to={"/"}>
          <button className="text-4xl p-1 align-start"> <IoMdArrowRoundBack/></button></Link>
        </div>
        <ProductDetails />
    </div>
  )
}
export default ProdDetails;