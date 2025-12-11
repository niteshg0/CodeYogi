import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProdDetails from "./pages/ProdDetails";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col">
      <Header />
      <Routes>
        <Route index element={<Products />} />
        <Route path="/prod-detail/1" element={<ProdDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
