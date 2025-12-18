import React, { memo } from "react";
import Not_Found from "../assets/Images/Not_Found.png";
import { Link } from "react-router-dom";

const NotFoundPage = memo(() => {
  return (
    <div className="flex flex-col justify-center items-center grow">
        <img src={Not_Found} alt="Product Not Found" className="w-70 md:w-auto " />
        <h1 className="text-2xl font-bold mt-4 text-primary-dark mb-4">The Route Not Found</h1>
        <Link to="/" >Go to Home</Link>
    </div>
  )
});

export default NotFoundPage;