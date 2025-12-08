import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col">
      <Header />
      <main className="flex justify-center items-center  grow p-4">
        <div className="bg-white w-[80%] p-8 ">
          <div className="flex justify-end p-4">
            <select
              name=""
              id="sort"
              className="px-4 py-2 border border-gray-300 bg-gray-100"
            >
              <option value="Default rating">Default rating</option>
              <option value="High to low">High to low</option>
              <option value="Low to high">Low to high</option>
            </select>
          </div>
          <div className="w-full sm:grid-cols-2 grid md:grid-cols-3  gap-2 mx-auto">
            {/* Products List */}
            <Product
              title={"Black Printed Coffee Mug"}
              category={"Mugs"}
              price={12.99}
              img={
                "https://plus.unsplash.com/premium_photo-1718234942375-4fcef6828891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBjdXB8ZW58MHx8MHx8fDA%3D"
              }
            />

            <Product
              img={
                "https://images.unsplash.com/photo-1626881503617-34b52868cd7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBjdXB8ZW58MHx8MHx8fDA%3D"
              }
              title={" Father Black Printed Coffee Mug"}
              category={"Mugs"}
              sale={true}
              price={12.99}
            />

            <Product
              img={
                "http://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww"
              }
              title={"white shirt"}
              category={"Clothes"}
              price={20.99}
            />

            <Product
              img={
                "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww"
              }
              title={"Green shirt"}
              category={"Clothes"}
              price={20.99}
              sale={true}
            />

            <Product
              img={
                "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
              }
              title={"Black shirt"}
              category={"Clothes"}
              price={20.99}
            />

            <Product
              title={"Black Printed Coffee Mug"}
              category={"Mugs"}
              price={12.99}
              sale={true}
              img={
                "https://plus.unsplash.com/premium_photo-1718234942375-4fcef6828891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBjdXB8ZW58MHx8MHx8fDA%3D"
              }
            />

            <Product
              img={
                "https://images.unsplash.com/photo-1626881503617-34b52868cd7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBjdXB8ZW58MHx8MHx8fDA%3D"
              }
              title={" Father Black Printed Coffee Mug"}
              category={"Mugs"}
              price={12.99}
            />

            <Product
              img={
                "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww"
              }
              title={"Green shirt"}
              category={"Clothes"}
              price={20.99}
            />

            <Product
              img={
                "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
              }
              title={"Black shirt"}
              category={"Clothes"}
              sale={true}
              price={20.99}
            />
          </div>

          <div className="p-4 pl-0 flex gap-1">
            <button className="border border-red-500 py-1 px-2 ">1</button>
            <button className="border border-red-500 py-1 px-2">2</button>
            <button className="border border-red-500 py-1 px-2">-&gt;</button>
          </div>
        </div>
      </main>
      <Footer />

      <ProductDetails />
    </div>
  );
}

export default App;
