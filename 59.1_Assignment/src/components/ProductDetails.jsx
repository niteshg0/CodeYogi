const ProductDetails = () => {
  return (
    <div className="w-[90%] mx-auto h-180 flex px-15 py-10 mb-10  gap-18 bg-white">
      <img
        src="https://images.unsplash.com/photo-1633966887768-64f9a867bdba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww"
        alt=" Green shirt"
        className="w-[50%] object-cover object-center"
      />

      <div className="flex flex-col gap-7">
        <h1 className="text-4xl font-semibold">Premium Green Shirt</h1>
        <p className="text-gray-600 text-3xl font-semibold">$20.99</p>
        <p className="text-gray-600 text-2xl">
          This premium green shirt is made from high-quality materials, ensuring
          comfort and durability. Perfect for casual wear or dressing up for
          special occasions.
          This premium green shirt is made from high-quality materials, ensuring
          comfort and durability.
        </p>

        <div className="flex justify-start gap-4 pt-4">
          <input
            type="number"
            value={1}
            className="w-15 border border-gray-300 text-center text-lg"
          />
          <button className="bg-orange-600 text-white py-2 px-6 w-45 rounded  text-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
