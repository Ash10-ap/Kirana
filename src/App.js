import "./App.css";
import Login from "./view/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import AddToCart from "./Components/AddToCart/AddToCart";
import Registration from "./Registration";
import Layout from "./Components/Layout/Layout";
import ProductDescription from "./view/ProductDescription";
//import Filter from "./view/Filter";
import { lazy, Suspense } from "react";

const Filter = lazy(() => import("./view/Filter"));
function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<p>please wait your page loading....</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<AddToCart />} />
            <Route path="/product/:id" element={<ProductDescription />} />
            <Route path="/specials" element={<Filter />} />
          </Routes>
        </Suspense>
      </Layout>
      {/* <Registration /> */}
    </div>
  );
}

export default App;
