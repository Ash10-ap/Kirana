import "./App.css";
import Login from "./view/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import AddToCart from "./Components/AddToCart/AddToCart";
import Registration from "./Registration";
import Layout from "./Components/Layout/Layout";
import ProductDescription from "./view/ProductDescription";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/product/:id" element={<ProductDescription/>}/>
        </Routes>
      </Layout>
      {/* <Registration /> */}
    </div>
  );
}

export default App;
