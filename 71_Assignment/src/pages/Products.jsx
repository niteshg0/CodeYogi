import { useState } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductList } from "../api";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useMemo } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const Products = () => {
  const [filter, setFilter] = useState("default");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [prodList, setProdList] = useState([]);
  

  useEffect(() => {
    setLoading(true);
    const allProducts = fetchProductList();

    allProducts
      .then((data) => {
        // console.log(data);
        setProdList(data);
      })
      .catch((error) => {
        console.log("Error fetching products", error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const result = useMemo(() => {
    let products = [...prodList];

    if (query)
      products = products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );

    if (filter === "highToLow") {
      products.sort((a, b) => b.price - a.price);
    } 
    else if (filter === "lowToHigh") {
      products.sort((a, b) => a.price - b.price);
    } 
    else if (filter === "title") {
      products.sort((a, b) => {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        else return 0;
      });
    }
    return products;
  }, [filter, prodList, query]);


  if (error) {
    return <Error msg={"Error fetching products"} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="flex justify-center items-center  grow p-4">
      <div className="bg-white  w-[95%] sm:w-[80%] p-8 ">
        <div className="flex flex-col md:flex-row  justify-center md:justify-between md:items-center  p-4 gap-3">
          {/* <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query ? query : ""}
            placeholder="Search Items"
            className=" hidden sm:block border border-gray-300
            p-1 grow basis-0 shrink max-w-60 align-center"
          /> */}

          <Input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query ? query : ""}
          placeholder="Search Items"
          className="block  border border-gray-300
          p-1 grow basis-0 shrink max-w-60 align-center "
           />
          <select
            name=""
            id="sort"
            className="px-2  sm:h-13 border border-gray-300 bg-gray-100 grow shrink basis-0 max-w-60 "
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
          {result.length > 0 ? (
            result.map((p) => (
              <Link to={`/prod-detail/${p.id}`} key={p.id}>
                <Product
                  title={p.title}
                  category={p.category}
                  price={p.price}
                  img={p.thumbnail}
                />
              </Link>
            ))
          ) : (
            <h2>No products available</h2>
          )}
        </div>

        <div className="p-4 pl-0 flex gap-2 items-center justify-center">
          <Button className="border border-red-500 !py-1 !px-2 !text-red-500">1</Button>
          <Button className="border border-red-500 !py-1 !px-2 !text-red-500">2</Button>
          <Button className="border border-red-500 !py-1 !px-2 !text-red-500">3</Button>
          <Button className="border border-red-500 !py-1 !px-2 !text-red-500">-&gt;</Button>
        </div>
      </div>
    </main>
  );
};
export default Products;
