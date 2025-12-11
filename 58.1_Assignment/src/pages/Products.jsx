import { useState } from "react";
import allProducts from "../assets/data";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const Products = () => {
  const [filter, setFilter] = useState("default");
  const [query, setQuery] = useState("");

  let products = [...allProducts];

  const handleQuery = () => {
    products = products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleFilter = (filter) => {
    if (filter === "highToLow") {
      products.sort((a, b) => b.price - a.price);
    } else if (filter === "lowToHigh") {
      products.sort((a, b) => a.price - b.price);
    } else if (filter === "title") {
      products.sort((a, b) => {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        else return 0;
      });
    }
  };

  handleQuery();
  handleFilter(filter);
  return (
    <main className="flex justify-center items-center  grow p-4">
      <div className="bg-white  w-[95%] sm:w-[80%] p-8 ">
        <div className="flex justify-between  p-4 gap-3">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query ? query : ""}
            placeholder="Search Items"
            className=" hidden sm:block border border-gray-300
            p-1 grow basis-0 shrink max-w-60 align-center"
          />
          <select
            name=""
            id="sort"
            className="px-4 py-2 border border-gray-300 bg-gray-100 grow shrink basis-0 max-w-40 "
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="default">Default rating</option>
            <option value="title">Sort by title</option>
            <option value="highToLow">High to Low</option>
            <option value="lowToHigh">Low to High</option>
          </select>
        </div>

        <div className="w-full sm:grid-cols-2 grid md:grid-cols-3  gap-2 mx-auto mb-4">
          {products.length > 0 ? (
            products.map((p, idx) => (
              <Link to="/prod-detail/1" key={idx}>
                <Product
                  title={p.title}
                  category={p.category}
                  price={p.price}
                  img={p.img}
                />
              </Link>
            ))
          ) : (
            <h2>No products available</h2>
          )}
        </div>

        <div className="p-4 pl-0 flex gap-1">
          <button className="border border-red-500 py-1 px-2 ">1</button>
          <button className="border border-red-500 py-1 px-2">2</button>
          <button className="border border-red-500 py-1 px-2">-&gt;</button>
        </div>
      </div>
    </main>
  );
};
export default Products;
