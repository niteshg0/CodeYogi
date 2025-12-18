import { Link, useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import { IoMdArrowRoundBack } from "react-icons/io";
import { fetchProduct } from "../api.js";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProdDetails = ({ handleCartUpdate }) => {
  const id = +useParams().id;
  // console.log("id", id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState(null);

  console.log(" product details running");

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    console.log("runnign api ncall");

    const product = fetchProduct(id);

    product
      .then((data) => {
        // console.log(data);
        if (isMounted) setProduct(data);
      })
      .catch((error) => {
        console.log("Error fetching product", error);
        if (isMounted) setError(true);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (error) {
    return <Error msg={"Product Not Found"} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col grow bg-gray-300 items-center justify-center ">
      <div className="self-start ml-20">
        <Link to={"/"}>
          <button className="text-4xl p-1 align-start">
            {" "}
            <IoMdArrowRoundBack className="text-primary-dark text-5xl" />
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center px-3">
        {id > 1 && (
          <Link to={`/prod-detail/${id - 1}`}>
            <FaArrowLeft className="text-4xl text-primary-dark" />
          </Link>
        )}
        {product && (
          <ProductDetails {...product} handleCartUpdate={handleCartUpdate} />
        )}
        <Link to={`/prod-detail/${id + 1}`}>
          <FaArrowRight className="text-4xl text-primary-dark" />
        </Link>
      </div>
    </div>
  );
};
export default ProdDetails;
